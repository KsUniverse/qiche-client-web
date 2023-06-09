<template>
  <basic-container>
    <avue-crud :option="option" :table-loading="loading" :data="data" :page.sync="page" :permission="permissionList"
      :before-open="beforeOpen" v-model="form" ref="crud" @row-update="rowUpdate" @row-save="rowSave" @row-del="rowDel"
      @search-change="searchChange" @search-reset="searchReset" @selection-change="selectionChange"
      @current-change="currentChange" @size-change="sizeChange" @refresh-change="refreshChange" @on-load="onLoad">
      <template slot="menuLeft">
        <el-button type="danger" size="small" icon="el-icon-delete" plain v-if="permission.activeCode_delete"
          @click="handleDelete">删 除
        </el-button>
        <el-button type="primary" size="small" icon="el-icon-plus" plain v-if="permission.activeCode_delete"
          @click="handlerInfomation">软件介绍
        </el-button>
      </template>
      <template slot="codeForm" slot-scope="scope">
        <div style="display: flex; align-items: center;">
          <el-input v-model="form.code" disabled></el-input>
          <el-button type="primary" @click="generateCode" v-if="scope.type == 'add'">生成激活码</el-button>
        </div>
      </template>
    </avue-crud>
    <el-dialog title="修改客户端软件左下角介绍" :visible.sync="handlerInfomationVisible" append-to-body="">
      <p>提示: 输入连续字符 `!!!` 可以换行</p>
      <el-input v-model="clientInformation" placeholder="请输入介绍内容"  type="textarea"  :autosize="{ minRows: 2, maxRows: 8}"></el-input>
      <div slot="footer">
        <el-button type="primary" size="small" plain v-if="permission.activeCode_delete"
          @click="handlerCommitInfomation">提交
        </el-button>
      </div>
    </el-dialog>
  </basic-container>
</template>

<script>
import { getList, getDetail, add, update, remove, generator, clientInformation, commitInformation } from "@/api/archives/activeCode";
import option from "@/const/archives/activeCode";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {},
      query: {},
      loading: true,
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      selectionList: [],
      option: option,
      data: [],
      handlerInfomationVisible: false,
      clientInformation: '',
    };
  },
  computed: {
    ...mapGetters(["permission"]),
    permissionList() {
      return {
        addBtn: this.vaildData(this.permission.activeCode_add, false),
        viewBtn: this.vaildData(this.permission.activeCode_view, false),
        delBtn: this.vaildData(this.permission.activeCode_delete, false),
        editBtn: this.vaildData(this.permission.activeCode_edit, false)
      };
    },
    ids() {
      let ids = [];
      this.selectionList.forEach(ele => {
        ids.push(ele.id);
      });
      return ids.join(",");
    }
  },
  methods: {
    rowSave(row, done, loading) {
      add(row).then(() => {
        this.onLoad(this.page);
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        done();
      }, error => {
        loading();
        window.console.log(error);
      });
    },
    rowUpdate(row, index, done, loading) {
      update(row).then(() => {
        this.onLoad(this.page);
        this.$message({
          type: "success",
          message: "操作成功!"
        });
        done();
      }, error => {
        loading();
        console.log(error);
      });
    },
    rowDel(row) {
      this.$confirm("确定将选择数据删除?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          return remove(row.id);
        })
        .then(() => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        });
    },
    handleDelete() {
      if (this.selectionList.length === 0) {
        this.$message.warning("请选择至少一条数据");
        return;
      }
      this.$confirm("确定将选择数据删除?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          return remove(this.ids);
        })
        .then(() => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          this.$refs.crud.toggleSelection();
        });
    },
    beforeOpen(done, type) {
      if (["edit", "view"].includes(type)) {
        getDetail(this.form.id).then(res => {
          this.form = res.data.data;
        });
      }
      done();
    },
    searchReset() {
      this.query = {};
      this.onLoad(this.page);
    },
    searchChange(params, done) {
      this.query = params;
      this.page.currentPage = 1;
      this.onLoad(this.page, params);
      done();
    },
    selectionChange(list) {
      this.selectionList = list;
    },
    selectionClear() {
      this.selectionList = [];
      this.$refs.crud.toggleSelection();
    },
    currentChange(currentPage) {
      this.page.currentPage = currentPage;
    },
    sizeChange(pageSize) {
      this.page.pageSize = pageSize;
    },
    refreshChange() {
      this.onLoad(this.page, this.query);
    },
    onLoad(page, params = {}) {
      this.loading = true;
      getList(page.currentPage, page.pageSize, Object.assign(params, this.query)).then(res => {
        const data = res.data.data;
        this.page.total = data.total;
        this.data = data.records;
        this.loading = false;
        this.selectionClear();
      });
    },
    generateCode() {
      generator().then(res => {
        console.log(res.data.data)
        this.form.code = res.data.data
      })
    },
    handlerInfomation() {
      clientInformation().then(res => {
        this.clientInformation = res.data.data.userExt
      })
      this.handlerInfomationVisible = true;
    },
    handlerCommitInfomation() {
      commitInformation(this.clientInformation).then(() => {
        this.$message.success("提交成功");
      })
    }
  }
};
</script>

<style></style>
