import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

module.exports = {
  NODE_ENV: '"production"',
  REST_API_URL: JSON.stringify(process.env.REST_API_URL),
  VUE_APP_API_KEY: JSON.stringify(process.env.VUE_APP_API_KEY),
  VUE_APP_APP_ID: JSON.stringify(process.env.VUE_APP_APP_ID),
  VUE_APP_AUTH_DOMAIN: JSON.stringify(process.env.VUE_APP_AUTH_DOMAIN),
  VUE_APP_DATABASE_URL: JSON.stringify(process.env.VUE_APP_DATABASE_URL),
  VUE_APP_MEASUREMENT_ID: JSON.stringify(process.env.VUE_APP_MEASUREMENT_ID),
  VUE_APP_MESSAGING_SENSOR_ID: JSON.stringify(process.env.VUE_APP_MESSAGING_SENSOR_ID),
  VUE_APP_PROJECT_ID: JSON.stringify(process.env.VUE_APP_PROJECT_ID),
  VUE_APP_STORAGE_BUCKET: JSON.stringify(process.env.VUE_APP_STORAGE_BUCKET)
}
