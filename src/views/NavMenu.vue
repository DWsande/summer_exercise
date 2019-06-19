<template>
  <el-container>
    <el-header class="header" height="100px">
      <img src="../assets/headico.svg"/>
      <a>Happy Learing English</a>
    </el-header>

    <el-container style="margin-top: 20px">
      <el-aside width="15%">
        <el-menu
          :default-openeds="openlist"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>单词</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/word/paper">单词纸</el-menu-item>
              <el-menu-item index="/word/list">词库</el-menu-item>
              <el-menu-item index="/word/upload">上传文件</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>作文</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/compostion">优秀作文</el-menu-item>
              <el-menu-item index="/upload_compostion">上传作文</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">班级</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "NavMenu",
      data(){
          return{
            openlist:["1","2"]
          }
      },
      methods:{
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>

  .header{
    background: #d3dce6;
    width:95%;
  }
  .header img{
    height: 50px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .header a{
    margin-left: 4%;
    font-size: 2.5rem;
    position: relative;
    /*display: inline;*/
    top: 20%;
  }



</style>
