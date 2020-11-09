export const PRODUCTS = ['mlar', 'datasets', 'reports']


export const PRODUCT_NAMES = {
  mlar: 'Modified LAR',
  datasets: 'Datasets',
  reports: 'Reports',
}


export const CATEGORIES = {
  correction: { order: 1 },
  update: { order: 2 },
  release: { order: 3 },
  notice: { order: 4 },
}


export const PUB_CHANGELOG_URL = 'https://raw.githubusercontent.com/cfpb/hmda-frontend/master/src/data-publication/constants/publicationChangeLog.json'


export const DEFAULT_FILTERS = {
  type: [],
  product: [],
  keywords: '',
}
