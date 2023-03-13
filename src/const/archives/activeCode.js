export default {
  height: "auto",
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
      label: "激活码",
      prop: "code",
      type: "input",
      span: 12,
      labelWidth: 120,
      search: true,
      fromslot: true,
      rules: [
        {
          required: true,
          message: "请输入激活码",
          trigger: "blur",
        },
      ],
    },
    {
      label: "手机号",
      prop: "phone",
      type: "input",
      labelWidth: 120,
      search: true,
    },
    {
      label: "mac地址",
      prop: "mac",
      type: "input",
      display: false,
    },
    {
      label: "结束时间",
      prop: "endTime",
      type: "datetime",
      format: "yyyy-MM-dd HH:mm:ss",
      valueFormat: "yyyy-MM-dd HH:mm:ss",
      labelWidth: 120,
      rules: [
        {required: true, message: "请选择激活码结束时间", trigger: 'blur'}
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "一个月后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一年后",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 365);
              picker.$emit("pick", date);
            },
          },
        ],
      },
    },
    {
      label: "每日下载次数",
      prop: "downloadTimes",
      type: "number",
      value: 10,
      labelWidth: 120,
      rules: [
        {required: true, message: "请输入限制下载次数", trigger: 'blur'}
      ]
    },
    {
      label: "创建时间",
      prop: "createTime",
      type: "input",
      display: false,
    },
    {
      label: "修改时间",
      prop: "updateTime",
      type: "input",
      display: false,
    },
  ],
};
