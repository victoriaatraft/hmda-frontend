import React from 'react'
import PropTypes from 'prop-types'
import { splitYearQuarter } from '../api/utils.js'
import { isBeta } from '../../common/Beta.jsx'
import { HeaderBeforeOpen } from './HeaderBeforeOpen.jsx'
import { HeaderOpen } from './HeaderOpen'
import { HeaderClosed } from './HeaderClosed'
import { HeaderLate } from './HeaderLate'
import { Redirect } from 'react-router-dom'

const InstitutionsHeader = ({ selectedPeriod }) => {
  if (!selectedPeriod.period || isBeta()) return null

  let [filingYear, _] = splitYearQuarter(selectedPeriod.period)
  if (!filingYear) return

  if (selectedPeriod.isClosed && selectedPeriod.isPassed)
    return <HeaderClosed {...selectedPeriod} />

  if (selectedPeriod.isLate) return <HeaderLate {...selectedPeriod} />

  if (selectedPeriod.isOpen) return <HeaderOpen {...selectedPeriod} />

  return <HeaderBeforeOpen {...selectedPeriod} />
}

export const HeaderDocsLink = ({ period }) => {
  const [filingYear, isQuarterly] = period.split('-')

  const text = isQuarterly
    ? "For more information on quarterly filing dates, visit the "
    : "For more information regarding filing, please visit the "
  
  const url = isQuarterly
    ? `/documentation/${filingYear}/quarterly-filing-dates/`
    : `/documentation/${filingYear}`
  
  return (
    <>
      {text}
      <a
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        Documentation
      </a>{" "}
      page.
    </>
  )
}

InstitutionsHeader.propTypes = {
  selectedPeriod: PropTypes.object,
  hasQuarterlyFilers: PropTypes.bool
}

export default InstitutionsHeader
