<template>
  <div class="detail">
    <el-container>
      <el-header>
        <i class="el-icon-s-goods" style="font-size:20px;font-weight:600;"> 单一API接口名称</i>
      </el-header>
      <el-main>
        <el-container>
          <el-header>
            <el-row>
              <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                  <el-row :gutter="20">
                    <el-col :span="5"><div class="grid-content bg-purple" style="font-size:18px;font-weight:800;">接入次数申请：</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary">25000次</el-button></div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary">50000次</el-button></div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple"><el-button type="primary" icon="el-icon-star-on">500000次</el-button></div></el-col>
                  </el-row>                   
                </div>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-container>
              <el-header style="text-align:center;">
                 <el-row>
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark" >
                      <h2>API详细描述</h2>           
                    </div>
                  </el-col>
                </el-row>
              </el-header>
              <el-main>
                <el-table
                  :data="tableDataA"
                  style="width: 100vw;margin-bottom:20px;">
                  <el-table-column
                    prop="address"
                    label="接口地址"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="request"
                    label="请求方法"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="returnForm"
                    label="返回格式"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="description"
                    label="接口简单描述"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="other"
                    label="借口备注信息"
                    min-width="150">
                  </el-table-column>
                </el-table>
              
                <el-row style="text-align:left;line-height:40px;margin:0;">
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark" >
                      <h2>请求参数：</h2>           
                    </div>
                  </el-col>
                </el-row>
                <el-table
                  :data="tableDataB"
                  border
                  style="width: 100vw;margin-bottom:20px;">
                  <el-table-column
                    prop="name"
                    label="名称"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="must"
                    label="必填"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="类型"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="description"
                    label="说明"
                    min-width="150">
                  </el-table-column>
                </el-table>

                <el-row style="text-align:left;line-height:40px;margin:0;">
                  <el-col :span="24">
                    <div class="grid-content bg-purple-dark" >
                      <h2>响应参数：</h2>           
                    </div>
                  </el-col>
                </el-row>
                <el-table
                  :data="tableDataC"
                  border
                  style="width: 100vw;margin-bottom:20px;">
                 <el-table-column
                    prop="name"
                    label="名称"
                    min-width="150"
                    height="100px">
                  </el-table-column>
                  <el-table-column
                    prop="type"
                    label="类型"
                    min-width="150">
                  </el-table-column>
                  <el-table-column
                    prop="description"
                    label="说明"
                    min-width="150">
                  </el-table-column>
                </el-table>   
              </el-main>
            </el-container>
           
          </el-main>
        </el-container>
       
      </el-main>
    </el-container>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableDataA: [
        {
          address: "2016-05-02",
          request: "post",
          returnForm: "https://element.eleme.cn/#/zh-CN/component/table",         
          description: "这是。。。。。",
          other: "无"
        },
      ],
      tableDataB: [
        {
          name: "mobile",
          must: "是",
          type: "String",         
          description: "接收短信的手机号码",
        },
        {
          name: "mobile",
          must: "是",
          type: "String",         
          description: "接收短信的手机号码",
        },
      ],
      tableDataC: [
        {
          name: "error_code",
          type: "int",         
          description: "返回代码",
        },
      ]
    }
    
  },
  // created(){
  //   axios.get('')
  //     .then(res=>{
  //        console.log(res);
  //        this.tableDataA=res.data[0];
  //        this.tableDataB=res.data[1];
  //        this.tableDataC=res.data[2];
 
  //     })
  //     .catch(error=>{
  //         console.log(error);
  //         alert('网络错误，不能访问');
  //     })
  // },
  methods: {
      handleClick(row) {
        console.log(row);
      },
      goTo(path) {
          console.log("success");
          this.$router.replace(path);
      },
      // tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      //   if (rowIndex === 0) {
      //       return 'background-color:rgb(250,250,250);color:black;padding:0px;margin:-10px;'
      //   }
      // },
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-header, .el-footer {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    // line-height: 160px;

  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.el-table td, .el-table th{
  font-weight: 800;
}


</style>
<style scope>
.detail .el-table__header tr,
 .detail .el-table__header th
  { padding: 0;
    height:60px !important;
    background-color: rgb(252, 252, 227);
    font-weight: 800;
    color: black;
  }
.cell{max-height: 60px !important;overflow: auto !important;} 

</style>
