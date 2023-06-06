
/* importo la libreria de firebase admin para poder usar firebase desde el backend */
const admin = require('firebase-admin')

/* Busco las crendenciasles  que estas se descargan desde le apartado de cuentas de serivicios de tu protecto
en firebase  */
const serviceAccount = require('../serviceAccountKey.json')

/* inicializo mi app  con las crendenciales, de todas formas esta parte te la firebase */
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

/* Ahora voy a verificar el token de google usando la funcion verifiIdToken, le paso el token y consumo la promesa. */
const verifyIdToken = async (idToken) => {
  try {
    const { uid } = await admin.auth().verifyIdToken(idToken)
    return uid
  } catch (error) {
    return null
  }
}
module.exports = { verifyIdToken }
