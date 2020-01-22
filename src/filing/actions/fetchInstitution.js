import fetchCurrentFiling from './fetchCurrentFiling.js'
import receiveInstitution from './receiveInstitution.js'
import receiveError from './receiveError.js'
import hasHttpError from './hasHttpError.js'
import { getInstitution } from '../api/api.js'
import requestInstitution from './requestInstitution.js'
import { error } from '../utils/log.js'

export default function fetchInstitution(institution, filingPeriod, fetchFilings = true) {
  return (dispatch, getState) => {
    dispatch(requestInstitution(institution.lei))
    return getInstitution(institution.lei, filingPeriod)
      .then(json => {
        return hasHttpError(json).then(hasError => {
          if (hasError) {
            if(json.status === 404) {
              const message = `${institution.lei} does not exist in ${filingPeriod.split('-')[0]}.`
              dispatch(receiveError({ status: json.status, message, heading: 'Institution not found.' }))
              throw new Error(message)
            }
            
            dispatch(receiveError(json))
            throw new Error(json && `${json.status}: ${json.statusText}`)
          }

          dispatch(receiveInstitution(json))
          if(fetchFilings) return dispatch(fetchCurrentFiling(json))
        })
      })
      .catch(err => {
        error(err)
      })
  }
}
