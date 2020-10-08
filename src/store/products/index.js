import {get, post} from '../../utils/axios'
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
const products = {
    namespaced:true,
    state:function(){
        return{
            list:null,
            total:0,
            listQuery:{
                page:1,
                limit:5
            },
            dialogVisible:false,
            product_info:{}
        }
    },
    actions:{
        fetchData(context){
            post("/product/query",{page:context.state.listQuery.page-1,pageSize:context.state.listQuery.limit}).then((data)=>{
                context.state.list = data.data.list
                console.log(data.data)
                context.state.total = data.data.total
            })
        },
        handleAdd(context){
            context.state.product_info={}
            context.state.dialogVisible=true
        },
        handleClose(context){
            context.state.dialogVisible=false
        },
        handleSave(context){
            post("/product/saveOrUpdate",context.state.product_info).then((data)=>{
                context.dispatch('fetchData');
                ElementUI.Notification({
                    title: '保存',
                    message: '保存成功',
                    type: 'success',
                    duration: 2000
                  })
                context.state.dialogVisible=false
            })
        },
        handleEdit(context,data){
            context.state.product_info=data;
            context.state.dialogVisible=true;
        },
        handleDelete(context,id){
            get("/product/deleteById?id="+id).then((data)=>{
                context.dispatch('fetchData');
                ElementUI.Notification({
                    title: '删除',
                    message: '删除成功',
                    type: 'success',
                    duration: 2000
                  })
                context.state.dialogVisible=false;
            })
        },
        handleRemove(file, fileList){
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
          }
    }
}

export default products