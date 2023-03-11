export default {
  height:'auto',
  calcHeight: 30,
  tip: false,
  searchShow: true,
  searchMenuSpan: 6,
  border: true,
  index: true,
  viewBtn: true,
  selection: true,
  dialogClickModal: false,
  column: [
    {
      label: "",
      prop: "id",
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
    {
      label: "一级菜单",
      prop: "type",
      type: "select",
      search: true,
      rules: [
        {required: true, message:"请选择一级菜单类型", trigger: "blur"}
      ],
      dicData: [
        {
          label: "教学视频",
          value: 1
        },
        {
          label: "ECU标定文件",
          value: 2
        },
        {
          label: "DCU标定文件",
          value: 3
        },
        {
          label: "a2l配置文件",
          value: 4
        },
        {
          label: "变量表格",
          value: 5
        },
        {
          label: "ECU定义图",
          value: 6
        },
        {
          label: "软件安装包",
          value: 7
        },
        {
          label: "数据库",
          value: 8
        },
        {
          label: "应急救援/防盗/解锁",
          value: 9
        },
        {
          label: "其他",
          value: 10
        },
      ]
    },
    {
      label: "目录名称",
      prop: "name",
      type: "input",
      search: true,
    },
    {
      label: "租户ID",
      prop: "tenantId",
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
    {
      label: "创建人",
      prop: "createUser",
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
    {
      label: "创建部门",
      prop: "createDept",
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
    {
      label: "创建时间",
      prop: "createTime",
      type: "input",
      display: false,
    },
    {
      label: "修改人",
      prop: "updateUser",
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
    {
      label: "修改时间",
      prop: "updateTime",
      type: "input",
      display: false,

    },
    {
      label: "1. 待审核 2.审核成功 3.审核失败",
      prop: "status",
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
    {
      label: "是否已删除",
      prop: "isDeleted",
      type: "input",
      addDisplay: false,
      editDisplay: false,
      viewDisplay: false,
      hide: true,
    },
  ]
}
