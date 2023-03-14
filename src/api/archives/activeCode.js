import request from '@/router/axios';

export const getList = (current, size, params) => {
  return request({
    url: '/api/blade-activeCode/activeCode/list',
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
    url: '/api/blade-activeCode/activeCode/detail',
    method: 'get',
    params: {
      id
    }
  })
}

export const remove = (ids) => {
  return request({
    url: '/api/blade-activeCode/activeCode/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: '/api/blade-activeCode/activeCode/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: '/api/blade-activeCode/activeCode/submit',
    method: 'post',
    data: row
  })
}

export const generator = () => {
  return request({
    url: '/api/blade-activeCode/activeCode/generator',
    method: 'get'
  })
}

export const clientInformation = () => {
  return request({
    url: '/api/blade-activeCode/activeCode/clientInformation',
    method: 'get'
  })
}

export const commitInformation = (data) => {
  return request({
    url: '/api/blade-activeCode/activeCode/commitInformation',
    method: 'post',
    data: {
      data: data
    }
  })
}
