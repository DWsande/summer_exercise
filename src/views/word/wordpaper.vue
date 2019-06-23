<template>
  <div>
    <el-input
      class="search"
      v-model="search"
      size="mini"
      placeholder="输入关键字搜索"/>
    <el-table
      :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      stripe
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}">
      <el-table-column
        prop="title"
        label="文件名"
        width="250">
        <template slot-scope="scope">
          <span class="title">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="生成时间"
        sortable
        width="200">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span class="date">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="生成单词本"
        width="180">
        <template slot-scope="scope">
          <el-button size="small" type="primary">生成</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="下载单词本"
        width="180">
        <template slot-scope="scope">
          <el-button size="small" type="success">下载</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="下载答案本"
        width="180">
        <template slot-scope="scope">
          <el-button size="small" type="success"  plain>下载</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="url_paper"
        label="删除">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" @click="deleterow(scope.row.id)" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--<el-button type="danger" icon="el-icon-delete" @click="delete('111')" circle></el-button>-->
  </div>
</template>

<script>
    export default {
        name: "wordpaper",
      data() {
        return {
          search:'',
          tableData: [{
            id : 1,
            date: '2016-05-02',
            title: '环保',
            url_paper: '上海市普陀区金沙江路 1518 弄'
          }, {
            id : 2,
            date: '2016-05-04',
            title: '旅游',
            url_paper: '上海市普陀区金沙江路 1517 弄'
          }, {
            id : 3,
            date: '2016-05-01',
            title: '历史',
            url_paper: '上海市普陀区金沙江路 1519 弄'
          }, {
            id : 4,
            date: '2016-05-03',
            title: '教育',
            url_paper: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods:{
          deleterow(id){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              for(let i =0 ;i<this.tableData.length;i++){
                if(this.tableData[i].id === id){
                  this.tableData.splice(i,1);
                  break;
                }
              }
              this.$message.success("delete success:"+id);
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          }
      }
    }
</script>

<style>
  .title{
    margin-left: 10px;
    color:#409EFF;
  }
  .date{
    margin-left: 10px;
  }
  .search{
    width: 30%;
    margin-right: 15%;
    float: right;
  }

</style>
