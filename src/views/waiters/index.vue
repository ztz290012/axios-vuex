<template>
  
  <div class="app-container">
    <h3>员工管理</h3>
     <el-button @click="handleAdd()" type="primary">新增</el-button>
    <el-table
    :data="list"
    border
    style="width: 100%">
    <el-table-column
      prop="username"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="telephone"
      label="手机号">
    </el-table-column>
    <el-table-column
      prop="idCard"
      label="身份证号">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
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
  title="保存员工信息"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <p>用户名：<el-input v-model="waiter_info.username" placeholder="请输入内容"></el-input></p>
      <p>密码：<el-input v-model="waiter_info.password" placeholder="请输入内容"></el-input></p>
      <p>手机号：<el-input v-model="waiter_info.telephone" placeholder="请输入内容"></el-input></p>
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
      
      listLoading: false
    }
  },
  //在仓库中的数据获取时必须写在computed中
  computed:{
    ...mapState('waiters',['list','total','listQuery','dialogVisible','waiter_info'])
  },
  created() {
    this.fetchData()
  },
  methods: {
   ...mapActions('waiters',['fetchData','handleAdd','handleClose','handleSave','handleEdit','handleDelete'])
   },
  }

</script>
