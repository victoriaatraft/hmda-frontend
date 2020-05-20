import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../Product.jsx'

const links = {
  2017: [
    <li key="0"><Link to="/documentation/2017/data-browser-filters/">Available Filters</Link></li>,
  ],
  2018: [
    <li key="1"><Link to="/documentation/2018/data-browser-faq/">Frequently Asked Questions</Link></li>,
    <li key="2"><Link to="/documentation/2018/data-browser-filters/">Available Filters</Link></li>,
    <li key="3"><Link to="/documentation/2018/derived-data-fields/">Derived Data Fields</Link></li>,
    <li key="4"><Link to="/documentation/2018/lar-data-fields/">Public HMDA Data Fields with Values and Definitions</Link></li>,
  ],
  2019: [
    <li key="2019-1"><Link to="/documentation/2019/data-browser-faq/">Frequently Asked Questions</Link></li>,
    <li key="2019-2"><Link to="/documentation/2019/data-browser-filters/">Available Filters</Link></li>,
    <li key="2019-3"><Link to="/documentation/2019/derived-data-fields/">Derived Data Fields</Link></li>,
    <li key="2019-4"><Link to="/documentation/2019/lar-data-fields/">Public HMDA Data Fields with Values and Definitions</Link></li>,
  ],
  2020: [
    <li key="2020-1"><Link to="/documentation/2020/data-browser-faq/">Frequently Asked Questions</Link></li>,
    <li key="2020-2"><Link to="/documentation/2020/data-browser-filters/">Available Filters</Link></li>,
    <li key="2020-3"><Link to="/documentation/2020/derived-data-fields/">Derived Data Fields</Link></li>,
    <li key="2020-4"><Link to="/documentation/2020/lar-data-fields/">Public HMDA Data Fields with Values and Definitions</Link></li>,
  ]
}

const DataBrowser = props => {
  const { year, inList, url } = props
  return (
    <Product
      heading="Data Browser"
      lead="This tool allows users to filter and download HMDA datasets."
      list={links[year]}
      inList={inList}
      year={year}
      url={url}
      collection="tools"
      slug="data-browser"
    />
  )
}

export default DataBrowser
