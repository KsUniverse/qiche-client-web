export default (type) => {
  return {
    height: 'auto',
    calcHeight: 30,
    tip: false,
    searchShow: true,
    searchMenuSpan: 6,
    border: true,
    index: true,
    viewBtn: true,
    selection: true,
    editBtn: false,
    menu: false,
    dialogClickModal: false,
    saveBtn: false,
    cancelBtn: false,
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
        label: '文件名称',
        prop: 'name',
        display: false,
        search: true
      },
      {
        label: "类型",
        prop: "type",
        type: "select",
        search: false,
        display: false,
        hide: true,
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
        ],
        value: type
      },
      {
        label: "二级目录",
        prop: "directoryId",
        type: "select",
        remote: true,
        search: true,
        dicUrl: "/api/blade-fileDirectory/fileDirectory/select?type=" + type,
        props: {
          label: "name",
          value: "id"
        },
        control: (val, from) => {
          if (val) {
            return {
              upload: {
                action: '/api/blade-file/file/put-file?type=' + type + '&directoryId=' + from.directoryId,
                display: true
              }
            }
          } else {
            return {
              upload: {
                display: false
              }
            }
          }
        }
      },
      {
        label: '拖拽上传',
        prop: 'upload',
        type: 'upload',
        span: 24,
        dragFile: true,
        multiple: true,
        propsHttp: {
          res: 'data',
          name: 'originalName',
          url: 'link'
        },
        limit: 50,
        data: {},
        hide: true,
        display: false
      },
      {
        label: "oss路径",
        prop: "url",
        type: "input",
        addDisplay: false,
        slot: true
      },
      {
        label: "是否支持预览",
        prop: "preview",
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

    ]
  }
}
