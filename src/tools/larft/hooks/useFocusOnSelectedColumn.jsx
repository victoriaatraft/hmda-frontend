import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { selectCol } from '../data-store/store'

export const useFocusOnSelectedColumn = colName => {
  const dispatch = useDispatch()

  // Bring the focused column into view
  useEffect(() => {
    const el = document.getElementById(`${colName}`)
    const grandparent = el?.parentElement?.parentElement
    if (grandparent) {
      grandparent.scrollIntoView({
        block: 'nearest',
        inline: 'nearest',
        behavior: 'auto',
      })
      grandparent.scrollTop = 0
      grandparent.style = {}
    }
  }, [colName])

  // Provide a function that will set focus to this column
  const focus = target => {
    if (colName !== target?.fieldName)
      dispatch(selectCol(target.fieldName))
  }

  return focus
}
