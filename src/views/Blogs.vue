<template>
  <div class="m-container">
    <Header></Header>
    <div class="block">
      <el-timeline>
       <el-timeline-item :timestamp="blog.created" placement="top" v-for="blog in blogs" v-bind:key="blog.id">
          <el-card>
            <h4><router-link :to="{name: 'BlogDetail', params: {blogId: blog.id}}">{{blog.title}}</router-link></h4>
            <p>{{blog.description}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>

    </div>
    <el-pagination class="mpage"
                   background
                   layout="prev, pager, next"
                   :current-page=currentPage
                   :page-size=pageSize
                   @current-change=page
                   :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Blogs',
  data () {
    return {
      blogs: {},
      currentPage: 1,
      total: 0,
      pageSize: 5
    }
  },
  methods: {
    page (currentPage) {
      const _this = this
      this.$axios.get('http://localhost:8088/blogs?currentPage=' + currentPage).then((res) => {
        console.log(res.data.data.records)
        _this.blogs = res.data.data.records
        _this.currentPage = res.data.data.current
        _this.total = res.data.data.total
        _this.pageSize = res.data.data.size
      })
    }
  },
  mounted () {
    this.page(1)
  }
}
</script>

<style scoped>

</style>
