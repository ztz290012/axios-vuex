<template>
  
  <div class="app-container">
    <h3>产品管理</h3>
     <el-button @click="handleAdd()" type="primary">新增</el-button>
    <el-table
    :data="list"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格">
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述">
    </el-table-column>
    <el-table-column
      prop="photo"
      label="图片">
      <!-- <img src="http://134.175.100.63:8686/group1/M00/00/01/rBAABV6jksaAdIsIAAA_SKB4Eng540.png"> -->
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
  <template>
    <pagination
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="fetchData"/>
  </template>
  <el-dialog
  title="保存产品信息"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <p>名称：<el-input v-model="product_info.name" placeholder="请输入内容"></el-input></p>
      <p>价格：<el-input v-model="product_info.price" placeholder="请输入内容"></el-input></p>
      <p>描述：<el-input v-model="product_info.description" placeholder="请输入内容"></el-input></p>
      <!-- <p>图片：<el-input v-model="product_info.photo" placeholder="请输入内容"></el-input></p> -->
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture">
        <el-button size="small" type="primary">点击上传图片</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose()">取 消</el-button>
        <el-button type="primary" @click="handleSave()">确 定</el-button>
      </span>
</el-dialog>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import {mapState,mapActions} from 'vuex'
export default {
  components:{Pagination},
  data() {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      listLoading: false
    }
  },
  //在仓库中的数据获取时必须写在computed中
  computed:{
    ...mapState('products',['list','total','listQuery','dialogVisible','product_info'])
  },
  created() {
    this.fetchData()
  },
  methods: {
   ...mapActions('products',['fetchData','handleAdd','handleClose','handleSave','handleEdit','handleDelete','handleRemove','handlePreview'])
   },
  }

</script>
