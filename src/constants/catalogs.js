const pageInfo = {
  logo: "img/logo.svg",
  cover: "img/cover.png",
  icon: "img/icon.jpg",
  nombre: "To-Do App",
  welcomeMessage: "Comienza ahora",
  slogan: "Organiza tu espacio mental",
  footerMessage: "© 2021 To-do App.",
}

const errors = {
  default: "Faltan datos",
  mail: "El email no es valido",
  mailUnavalible: "El email ya existe en nuestra base de datos",
  password: "El password es incorrecto",
  passwordReq: "El password no es seguro",
  passwordEq: "El password no es igual",
  name: "Nombre incorrecto",
  invalidName: "El nombre no es valido",
  invalidNumber: "El numero no es valido",
  nameLength: "El titulo debe tener entre 4, 12 letras",
  descriptionLength: "La descripción debe tener entre 15, 60",
  //for login password?
  noUser: "El usuario no existe en el sistema",
  session: "Sesión invalida",
  denied: "Permisos insuficientes",
  estatus: "Tu cuenta esta desabilitada",
  recovery: "Tu token expiro o es incorrecto",
  serverError: "Estamos experimentando problemas, nuestros tecnicos estan trabajando para resolverlos."
}

const success = {
  userUpdated: "¡Usuario actualizado exitosamente!",
  tasks: "¡Tareas obtenidas exitosamente!",
  login: "Sesión exitosa...",
  verified: "Sesión verificada...",
  logout: "Sesión cerrada.",
  recovery: "Contraseña actualizada.",
  emailSend: "¡Correo enviado! revisa tu bandeja de entrada.",
  taskCreated:"Tarea creada",
  taskDeleted:"Tarea eliminada",
  taskCompleted:"Tarea completada"
}

const pages = {
  account: "Mi cuenta",
  dashboard: "Dashboard",
  profile: "Perfíl",
  users: "Usuarios",
  newUser: "Nuevo usuario",
  reports: "Reportes",
}

const toast = { open: true, message: "", success: false }

const inputs = {
  // buttons
  load: "Cargando",
  update: "Actualizar información",
  add: "Agregar",
  changePassword: "Cambiar contraseña",
  updatePassword: "Solicitar correo",
  login: "Iniciar sesión",
  // Labels
  password: "Contraseña",
  confirmPassword: "Confirmar Contraseña",
  name: "Nombre",
  tel: "Telefóno",
  email: "Correo",
  status: "Estatus",
  description: "Descripción",
  rol: "Rol",
}

const rol = {
  "1": "Admin",
  "2": "Manager",
  "3": "Associate"
}

const estatus = {
  "2": "Activo",
  "3": "Pendiente",
  "4": "Suspendido",
  "5": "Eliminado"
}

const Catalogs = {
  vertical: 'bottom',
  horizontal: 'center',
  toast: toast,
  inputStr: inputs,
  pageInfo: pageInfo,
  errors: errors,
  success: success,
  rol: rol,
  estatus: estatus,
  pages: pages
}

export default Catalogs;