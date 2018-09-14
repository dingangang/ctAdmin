<template>
  <d2-container>
    <template slot="header">
      <el-form :inline="true" :model="formInline" class="search-from">
        <el-form-item label="查询">
          <el-select v-model="formInline.range" placeholder="范围">
            <el-option label="最近两天" value="1"></el-option>
            <el-option label="自定义" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="formInline.range === '2'">
          <el-button type="primary" @click="centerDialogVisible = true">高级查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" :disabled="formInline.range === '2'">查询</el-button>
        </el-form-item>
        <div style="float: right">
          <el-button type="info" @click="onReset">重置筛选</el-button>
        </div>
      </el-form> 
    </template>
    <!--<route-info/>-->
    <div v-show="!tableDataLength && unSearch">
      暂无数据
    </div>
    <transition name="el-fade-in-linear">
      <el-table
        v-if="refreshTable"
        v-loading="loading2"
        v-show="tableDataLength || !unSearch"
        :data="tableDisplayData"
        ref="dataTable"
        @sort-change="handleSortChange"
        @filter-change="handleFilterChange"
        highlight-current-row
        :stripe="true"
        :border="true"
        style="width: 100%">
        <el-table-column
          type="index"
          :index="indexMethod"
          fixed
          resizable
          width="50">
        </el-table-column>
        <el-table-column
          prop="ProductID"
          column-key="ProductID"
          label="产品编号"
          :label-class-name="highlightSet.ProductID"
          fixed
          :filters="tableFilters.ProductID"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          resizable
          width="150">
        </el-table-column>
        <el-table-column
          prop="OID"
          column-key="OID"
          label="自增号"
          :label-class-name="highlightSet.OID"
          resizable
          :filters="tableFilters.OID"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="OnlyID"
          column-key="OnlyID"
          label="OnlyID"
          :label-class-name="highlightSet.OnlyID"
          resizable
          :filters="tableFilters.OnlyID"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          min-width="110">
        </el-table-column>
        <el-table-column
          prop="ProductGroupOID"
          resizable
          column-key="ProductGroupOID"
          :label-class-name="highlightSet.ProductGroupOID"
          :filters="tableFilters.ProductGroupOID"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="分类号"
          min-width="110">
        </el-table-column>
        <el-table-column
          prop="MaterialCode"
          resizable
          column-key="MaterialCode"
          :label-class-name="highlightSet.MaterialCode"
          :filters="tableFilters.MaterialCode"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="物料代码"
          min-width="170">
        </el-table-column>
        <el-table-column
          prop="MaterialName"
          resizable
          column-key="MaterialName"
          :label-class-name="highlightSet.MaterialName"
          :filters="tableFilters.MaterialName"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="物料名称"
          min-width="270">
        </el-table-column>
        <el-table-column
          prop="BatchNO"
          resizable
          column-key="BatchNO"
          :label-class-name="highlightSet.BatchNO"
          :filters="tableFilters.BatchNO"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="批次号"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="ProductType"
          resizable
          column-key="ProductType"
          :label-class-name="highlightSet.ProductType"
          :filters="tableFilters.ProductType"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="产品类型"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="ProductName"
          resizable
          column-key="ProductName"
          :label-class-name="highlightSet.ProductName"
          :filters="tableFilters.ProductName"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="产品名称"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="TradeMarkName"
          resizable
          column-key="TradeMarkName"
          :label-class-name="highlightSet.TradeMarkName"
          :filters="tableFilters.TradeMarkName"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="品牌"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="Basisweight"
          resizable
          column-key="Basisweight"
          :label-class-name="highlightSet.Basisweight"
          :filters="tableFilters.Basisweight"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="定量"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="LabelWidth"
          resizable
          column-key="LabelWidth"
          :label-class-name="highlightSet.LabelWidth"
          :filters="tableFilters.LabelWidth"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="宽度"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="LabelWidthUnit"
          resizable
          column-key="LabelWidthUnit"
          :label-class-name="highlightSet.LabelWidthUnit"
          :filters="tableFilters.LabelWidthUnit"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="幅宽单位"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="LabelLength"
          resizable
          column-key="LabelLength"
          :label-class-name="highlightSet.LabelLength"
          :filters="tableFilters.LabelLength"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="线长"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="LabelDiameter"
          resizable
          column-key="LabelDiameter"
          :label-class-name="highlightSet.LabelDiameter"
          :filters="tableFilters.LabelDiameter"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="直径"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="Grade"
          resizable
          column-key="Grade"
          :label-class-name="highlightSet.Grade"
          :filters="tableFilters.Grade"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="等级"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="PaperCert"
          resizable
          column-key="PaperCert"
          :label-class-name="highlightSet.PaperCert"
          :filters="tableFilters.PaperCert"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="纸种认证"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="PackType"
          resizable
          column-key="PackType"
          :label-class-name="highlightSet.PackType"
          :filters="tableFilters.PackType"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="包装类型"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="PolyHookType"
          resizable
          column-key="PolyHookType"
          :label-class-name="highlightSet.PolyHookType"
          :filters="tableFilters.PolyHookType"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="夹板包装"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="SpecCustName"
          resizable
          column-key="SpecCustName"
          :label-class-name="highlightSet.SpecCustName"
          :filters="tableFilters.SpecCustName"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="客户专用"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="SpecProdName"
          resizable
          column-key="SpecProdName"
          :label-class-name="highlightSet.SpecProdName"
          :filters="tableFilters.SpecProdName"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="产品专用"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="WhiteFlagType"
          resizable
          column-key="WhiteFlagType"
          :label-class-name="highlightSet.WhiteFlagType"
          :filters="tableFilters.WhiteFlagType"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="合格证类型"
          min-width="140">
        </el-table-column>
        <el-table-column
          prop="OrderNO"
          resizable
          column-key="OrderNO"
          :label-class-name="highlightSet.OrderNO"
          :filters="tableFilters.OrderNO"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="生产订单"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="SpecialCustomer"
          resizable
          column-key="SpecialCustomer"
          :label-class-name="highlightSet.SpecialCustomer"
          :filters="tableFilters.SpecialCustomer"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="特殊客户"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="CoreDiameter"
          resizable
          column-key="CoreDiameter"
          :label-class-name="highlightSet.CoreDiameter"
          :filters="tableFilters.CoreDiameter"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="纸芯径"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="CalcWeight"
          resizable
          column-key="CalcWeight"
          :label-class-name="highlightSet.CalcWeight"
          :filters="tableFilters.CalcWeight"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="理论重量"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="GrossWeight"
          resizable
          column-key="GrossWeight"
          :label-class-name="highlightSet.GrossWeight"
          :filters="tableFilters.GrossWeight"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="称重重量"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="LabelWeight"
          resizable
          column-key="LabelWeight"
          :label-class-name="highlightSet.LabelWeight"
          :filters="tableFilters.LabelWeight"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="标签重量"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="WeightMode"
          resizable
          column-key="WeightMode"
          :label-class-name="highlightSet.WeightMode"
          :filters="tableFilters.WeightMode"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="计重方式"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="DateProd"
          resizable
          column-key="DateProd"
          :label-class-name="highlightSet.DateProd"
          :filters="tableFilters.DateProd"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          width="180"
          label="生产日期">
        </el-table-column>
        <el-table-column
          prop="ShiftID"
          resizable
          column-key="ShiftID"
          :label-class-name="highlightSet.ShiftID"
          :filters="tableFilters.ShiftID"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="生产班组"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="Remark"
          column-key="Remark"
          :label-class-name="highlightSet.Remark"
          :filters="tableFilters.Remark"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          resizable
          label="生产备注"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="Standard"
          resizable
          column-key="Standard"
          :label-class-name="highlightSet.Standard"
          :filters="tableFilters.Standard"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="生产标准"
          min-width="200">
        </el-table-column>
        <el-table-column
          prop="MachineID"
          resizable
          column-key="MachineID"
          :label-class-name="highlightSet.MachineID"
          :filters="tableFilters.MachineID"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="机台号"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="WinderDestination"
          resizable
          column-key="WinderDestination"
          :label-class-name="highlightSet.WinderDestination"
          :filters="tableFilters.WinderDestination"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="去向"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="CustTrademark"
          resizable
          column-key="CustTrademark"
          :label-class-name="highlightSet.CustTrademark"
          :filters="tableFilters.CustTrademark"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="产品备注"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="LocationOID"
          resizable
          column-key="LocationOID"
          :label-class-name="highlightSet.LocationOID"
          :filters="tableFilters.LocationOID"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="货位自增号"
          min-width="140">
        </el-table-column>
        <el-table-column
          prop="LocationPosition"
          resizable
          column-key="LocationPosition"
          :label-class-name="highlightSet.LocationPosition"
          :filters="tableFilters.LocationPosition"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="货位位置"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="CellOID"
          resizable
          column-key="CellOID"
          :label-class-name="highlightSet.CellOID"
          :filters="tableFilters.CellOID"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="货格自增号"
          min-width="140">
        </el-table-column>
        <el-table-column
          prop="LaneWay"
          resizable
          column-key="LaneWay"
          :label-class-name="highlightSet.LaneWay"
          :filters="tableFilters.LaneWay"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="巷道"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="Bay"
          resizable
          column-key="Bay"
          :label-class-name="highlightSet.Bay"
          :filters="tableFilters.Bay"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="排"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="Line"
          resizable
          column-key="Line"
          :label-class-name="highlightSet.Line"
          :filters="tableFilters.Line"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="列"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="Level"
          resizable
          column-key="Level"
          :label-class-name="highlightSet.Level"
          :filters="tableFilters.Level"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="层"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="Location"
          resizable
          column-key="Location"
          :label-class-name="highlightSet.Location"
          :filters="tableFilters.Location"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="位"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="CellGroupOID"
          resizable
          column-key="CellGroupOID"
          :label-class-name="highlightSet.CellGroupOID"
          :filters="tableFilters.CellGroupOID"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="组盘号"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="InfeedType"
          resizable
          column-key="InfeedType"
          :label-class-name="highlightSet.InfeedType"
          :filters="tableFilters.InfeedType"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="入库类型"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="InfeedTime"
          resizable
          column-key="InfeedTime"
          :label-class-name="highlightSet.InfeedTime"
          :filters="tableFilters.InfeedTime"
          :filter-method="filterHandler"
          :filter-multiple="false"
          sortable="custom"
          label="入库时间"
          min-width="200">
        </el-table-column>
      </el-table>
    </transition>
    <div class="ct-pagi">
      <el-pagination
        v-show="tableData.length > 0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100, 200]"
        :page-size="tablePageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableDataLength">
      </el-pagination>
    </div>
    <el-dialog
      title="高级查询"
      :visible.sync="centerDialogVisible"
      :lock-scroll="true"
      :close-on-click-modal="false"
      width="60%"
      center>
      <div class="ct-custom-search">
        <p>和<i
          @click="addSearchItem"
          class="el-icon-circle-plus"></i></p>
        <el-form :inline="true" :model="customSearch" class="ct-custom-form">
          <form-item
            v-for="item in customSearch"
            :customSearch="item"
            @delItem='handleDelItem'
            v-bind:key="item.id"></form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitCustomSearch()">确 定</el-button>
      </span>
    </el-dialog>
    <!--<template slot="footer">-->
      <!---->
    <!--</template>-->
  </d2-container>
</template>

<script>
import RouteInfo from './componnets/RouteInfo'

export default {
  // 如果需要缓存页面
  // name 字段需要设置为和本页路由 name 字段一致
  name: 'WarehousingDetails',
  mounted () {
  },
  components: {
    RouteInfo
  },
  data () {
    return {
      originTableData: [],
      tableData: [],
      tableDisplayData: [],
      currentPage: 1,
      tablePageSize: 10,
      loading2: false,
      filterSet: {},
      unSearch: true,
      formInline: {
        range: '1'
      },
      tableFilters: {},
      refreshTable: true,
      highlightSet:{},
      centerDialogVisible: false,
      customSearch: {
        conditionals1: {
          name: 'conditionals1',
          c1: '',
          c2: '',
          c3: '',
          c4: ''
        }
      }
    }
  },
  computed: {
    tableDataLength: function () {
      return this.tableData.length
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
      if (this.formInline.range === '1') {
        this.loading2 = true
        this.unSearch = false
        this.$refs['dataTable'].clearFilter()
        this.$axios.get('/api/data/chuku', {
          params: {
            id: 77778
          }
        }).then(
          (res) => {
            this.originTableData = res.data
            this.tableData = res.data
            this.setDisplayTableData()
            this.loading2 = false
            this.makeTableFilters()
          },
          (res) => {
            this.$message.error('出错，没有返回值')
          }
        )
      }
    },
    onReset: function () {
      this.tableData = this.originTableData
      this.$refs['dataTable'].clearFilter()
      this.$refs['dataTable'].doLayout()
      this.$refs['dataTable'].clearSort()
      this.filterSet = {}
      this.highlightSet = {}
      this.refreshTable = false
      this.$nextTick(function () {
        this.refreshTable = true
      })
      this.setDisplayTableData()
    },
    makeTableFilters: function () {
      if (this.originTableData.length === 0) {
        return {}
      }
      let propNames = Object.keys(this.originTableData[0])
      let tFilters = {}
      propNames.forEach((p1) => {
        tFilters[p1] = this.makeColFilters(p1)
      })
      for (let key in tFilters) {
        tFilters[key].sort((a, b) => a.value - b.value)
      }
      this.tableFilters = tFilters
    },
    handleSizeChange: function (params) {
      this.tablePageSize = params
      this.setDisplayTableData()
    },
    handleCurrentChange: function (params) {
      this.currentPage = params
      this.setDisplayTableData()
    },
    setDisplayTableData: function () {
      let displayData = []
      let index = this.currentPage === 1
        ? 0
        : (this.currentPage - 1) * this.tablePageSize
      let totalNumber = this.tableDataLength <= this.tablePageSize * this.currentPage
        ? this.tableDataLength - 1
        : this.tablePageSize * this.currentPage - 1
      if (this.tableData.length === 0) {
        this.tableDisplayData = []
      }
      while (index <= totalNumber) {
        displayData.push(this.tableData[index])
        index += 1
      }
      this.tableDisplayData = displayData
    },
    handleSortChange: function (params) {
      let type = typeof(this.tableData[0][params.prop])
      if (params.order === 'ascending') {
        this.tableData = type === 'number'
          ? this.tableData.sort((a, b) => {
          return parseFloat(a[params.prop]) - parseFloat(b[params.prop])
        })
          : this.tableData.sort((a, b) => {
            if (a[params.prop].length === b[params.prop].length) {
              return a[params.prop].localeCompare(b[params.prop])
            } else {
              return a[params.prop].length - b[params.prop].length
            }
          })
      } else if (params.order === 'descending') {
        this.tableData = type === 'number'
          ? this.tableData.sort((a, b) => {
          return parseFloat(b[params.prop]) - parseFloat(a[params.prop])
        })
          : this.tableData.sort((a, b) => {
            if (a[params.prop].length === b[params.prop].length) {
              return b[params.prop].localeCompare(a[params.prop])
            } else {
              return b[params.prop].length - a[params.prop].length
            }
          })
      }
      this.setDisplayTableData()
    },
    makeColFilters: function (propName) {
      let tArr = []
      let result = [{text: '', value: ''}]
      if (this.originTableData.length > 0) {
        this.originTableData.forEach(function (p1) {
            tArr.push(p1[propName])
        })
        tArr = Array.from(new Set(tArr))
        result = []
        tArr.forEach(function (p1) {
          result.push({
            text: p1,
            value: p1
          })
        })
      }
      return result
    },
    indexMethod (index) {
      return this.tablePageSize * (this.currentPage - 1) + index + 1
    },
    filterHandler(value, row, column) {
      // 开启筛选功能
      // const property = column['property'];
      return true;
    },
    handleFilterChange(filter) {
      // 因为是单选，所以取去第一个,必须储存一个筛选的序列，不然多层筛选时会出问题
      let property = Object.keys(filter)[0]
      let v = filter[property][0]
      this.filterSet[property] = v
      // 高亮样式处理
      this.highlightSet[property] = 'highlight'
      let tTableData = []
      if (!v) {
        delete this.filterSet[property]
        delete this.highlightSet[property]
        if (Object.keys(this.filterSet).length === 0) {
          this.tableData = this.originTableData
        }
      }
      if (Object.keys(this.filterSet).length > 0) {
        this.originTableData.forEach((p1) => {
          let match = []
          for (let [key, value] of Object.entries(this.filterSet)) {
            match.push(p1[key] === value ? 1 : 0)
          }
          if ((match.find((n) => n === 0) === undefined)) {
            tTableData.push(p1)
          }
        })
        this.tableData = tTableData
      }
      // 利用v-if刷新组件，避免滚动条不灵活
      this.refreshTable = false
      this.$nextTick(function () {
        this.refreshTable = true
      })

      // 最后刷新表格
      this.setDisplayTableData()
    },
    addSearchItem: function () {
      let f = Object.keys(this.customSearch).length + 1
      while (`conditionals${f}` in this.customSearch) {
        f += 1
      }
      this.$set(this.customSearch, `conditionals${f}`, { name: `conditionals${f}`, c1: '', c2: '', c3:'', c4:''})
    },
    handleDelItem: function (params) {
      this.$delete(this.customSearch, params)
    },
    submitCustomSearch: function () {
      this.centerDialogVisible = false
      console.log('params', this.customSearch)
    }
  }
}
</script>
