<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-form-item>
          <el-select v-model="customSearch.c1" placeholder="编号" @change="handleSelectChange">
            <el-option label="包装类型" value="PackType"></el-option>
            <el-option label="备注" value="Remark"></el-option>
            <el-option label="标签宽度" value="LabelWidth"></el-option>
            <el-option label="标签长度" value="LabelLength"></el-option>
            <el-option label="标签直径" value="LabelDiameter"></el-option>
            <el-option label="产品备注" value="CustTrademark"></el-option>
            <el-option label="产品编号" value="ProductID"></el-option>
            <el-option label="产品专用" value="SpecProdName"></el-option>
            <el-option label="等级" value="Grade"></el-option>
            <el-option label="定量" value="Basisweight"></el-option>
            <el-option label="机台" value="MachineID"></el-option>
            <el-option label="计重模式" value="WeightMode"></el-option>
            <el-option label="夹板方式" value="PolyHookType"></el-option>
            <el-option label="卷芯" value="unknown2"></el-option>
            <el-option label="客户专用" value="SpecCustName"></el-option>
            <el-option label="批次号" value="BatchNO"></el-option>
            <el-option label="入库时间" value="InfeedTime"></el-option>
            <el-option label="色相" value="unknown1"></el-option>
            <el-option label="商标类型" value="unknown1"></el-option>
            <el-option label="特殊客户" value="SpecialCustomer"></el-option>
            <el-option label="物料编号" value="MaterialCode"></el-option>
            <el-option label="销售订单号" value="unknown3"></el-option>
            <el-option label="纸种认证" value="PaperCert"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item>
          <el-select v-model="customSearch.c2" placeholder="关系">
            <el-option label="等于" value="="></el-option>
            <el-option label="不等于" value="!="></el-option>
            <el-option label="大于" value=">"></el-option>
            <el-option label="大于等于" value=">="></el-option>
            <el-option label="小于" value="<"></el-option>
            <el-option label="小于等于" value="<="></el-option>
            <el-option label="介于" value="jieyu"></el-option>
            <el-option label="不介于" value="!jieyu"></el-option>
            <el-option label="包含" value="baohan"></el-option>
            <el-option label="不包含" value="!baohan"></el-option>
            <el-option label="Begins with" value="begins with"></el-option>
            <el-option label="End with" value="End with"></el-option>
            <el-option label="Is like" value="Is like"></el-option>
            <el-option label="Is not like" value="Is not like"></el-option>
            <el-option label="In any of" value="In any of"></el-option>
            <el-option label="In none of" value="In none of"></el-option>
            <el-option label="为空" value="null"></el-option>
            <el-option label="不为空" value="not null"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item v-if="customSearch.c1 !== 'InfeedTime'">
          <el-input v-model="customSearch.c3" placeholder="输入值"></el-input>
        </el-form-item>
        <el-form-item v-if="customSearch.c1 === 'InfeedTime'">
          <el-date-picker
            v-model="customSearch.c3"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="6" v-if="customSearch.c2.indexOf('jieyu') !== -1">
        <el-form-item v-if="customSearch.c1 !== 'InfeedTime'">
          <el-input v-model="customSearch.c4" placeholder="输入值"></el-input>
        </el-form-item>
        <el-form-item v-if="customSearch.c1 === 'InfeedTime'">
          <el-date-picker
            v-model="customSearch.c4"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="1">
        <i
          @click="delSearchItem"
          class="el-icon-error"></i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'FormItem',
  props: ['customSearch'],
  methods: {
    handleSelectChange: function () {
      this.customSearch.c3 = ''
      this.customSearch.c4 = ''
    },
    delSearchItem: function () {
      console.log('del')
      this.$emit('delItem', this.customSearch.name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/public.scss';
</style>
