import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/blade-downloadRecord/downloadRecord/list',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}

export const getDetail = (id) => {
  return request({
    url: '/api/blade-downloadRecord/downloadRecord/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/blade-downloadRecord/downloadRecord/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/blade-downloadRecord/downloadRecord/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/blade-downloadRecord/downloadRecord/submit',
    method: 'post',
    data: row
  })
}

