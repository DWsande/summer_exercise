<template>
  <div>
    <el-row style="margin-bottom:10px" v-for="(o1, index1) in 2" :key="o1" :gutter="10">
      <el-col :span="10" v-for="(o, index) in 2" :key="o">
        <el-card :body-style="{}">
          <div style="height: 200px;">
            <span>好吃的汉堡</span>
            <el-divider content-position="left">正文</el-divider>
            <span class="span">{{textarea}}</span>
            <div class="bottom clearfix">
              <time class="time mtime">{{ currentDate }}</time>
              <el-button class="button" type="primary" icon="el-icon-edit" circle></el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" align="bottom" gutter="10">
      <el-col :span="10">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "composition",
  data() {
    return {
      textarea:
        "I like to watch movies so much. Since I was very small, I have watched a lot of movies. Some people think that it is a waste of time on this amusement, then I can tell them they think in the wrong way. Watching movies is a good way to learn things. When I finish watching the movie, I will scan the comments on the Internet, then the analysis of the movie helps me understand the movie better. What's more, I also learn the culture. Like the movie Mummy, I learn the Egypt culture. When I search more information, I feel like reading a history book. Watching movie is a funny way to learn knowledge. ",
      currentDate: new Date()
    };
  }
};
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
  line-height: normal;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.mtime {
  display: table;
  padding-top: 20px;
}
.button {
  /* padding: 0; */
  margin-top: -30px;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.span {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /*word-break:break-all;*/
  white-space: normal;
  -webkit-line-clamp: 3;
}
.clearfix:after {
  clear: both;
}
</style>
