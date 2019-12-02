<template>
  <div>
    <el-container style="width:98.96vw">
      <el-header style="height:45px;">
        <el-row>
          <!--放置logo -->
          <el-col :span="8">
            <div class="grid-content">
              <el-col :span="12">
                <div class="grid-content">
                  <el-col :span="8">
                    <div class="grid-content">
                    </div>
                  </el-col>
                  <el-col :span="16">
                    <div class="grid-content">
                      <el-image :src="Logo" class="logopic"></el-image>
                    </div>
                  </el-col>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content">
                </div>
              </el-col>
            </div>
          </el-col>
          <!--放置登陆按钮 -->
          <el-col :span="16">
            <div class="grid-content">
              <el-row> 
                <el-col :span="18">
                  <div class="grid-content">
                  </div>
                </el-col>
                <el-col :span="3">
                  <div class="grid-content">
                    <el-button type="primary" round index="login" @click="goTo('/login')">登 录</el-button>
                  </div>
                </el-col>      
                <el-col :span="3">
                  <div class="grid-content">
                    <el-button type="primary" round index="register" @click="goTo('/register')">注 册</el-button>
                  </div>
                </el-col>                     
              </el-row>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="20vw">
          <el-row class="tac">
            <el-col :span="24">
              <h2>API 套餐</h2>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>分类A</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分类A1</template>
                    <el-menu-item index="packageAa" @click="goTo('/packageAa')">套餐A11</el-menu-item>
                    <el-menu-item index="1-2">套餐A12</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分类A2">
                    <el-menu-item index="1-3">套餐A21</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>
	

<script>
export default {
    data(){
        return{
          msg: "didi",
          Logo: require("@/components/static/images/home/top-aside/logo.jpg"),
      };    
    },
     methods: {
      handleSelect(key, keyPath) {
          this.goTo(key);
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      console.log("success");

      },
      goTo(path) {
          console.log("success");
          this.$router.replace(path);
      }
    }
}

</script>

<style scoped lang="scss">
.el-header, .el-footer {
    // background-color: rgb(215, 223, 233);
    color: #333;
    text-align: center;
    line-height: 30px;
    padding:0;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 20px;
  }
  
  .el-main {
    // background-color: #E9EEF3;
    color: #333;
    text-align: center;
    // line-height: 160px;
    padding: 0;
    width: 80vw;
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
  // .bg-purple {
  //   background: #d3dce6;
  // }
  // .bg-purple-light {
  //   background: #e5e9f2;
  // }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-image__error, .el-image__inner, .el-image__placeholder{
    margin-top: 10%;
  }

  .el-button{
    font-weight: 600;
    font-size: 16px;
    font-family: "微软雅黑";
    background-color: #E9EEF3;
    color: black;
    border-color: #E9EEF3;
  }

  .el-menu{
    font-size: 24px;
    padding: 0;
  }

</style>

