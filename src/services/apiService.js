import instance from '../utils/axios.js'

const getAll = () => {
  return instance.get("/buscar");
};
const get = id => {
  return instance.get(`/empresa/${id}`);
};
const create = data => {
  return instance.post("/empresa", data);
};
const update = (id, data) => {
  return instance.put(`/empresa/${id}`, data);
};
const remove = id => {
  return instance.delete(`/empresa/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return instance.delete(`/empresa`);
};
const findByTitle = nomeEmpresa => {
  return instance.get(`/empresa?nomeEmpresa=${nomeEmpresa}`);
};

const exportedObject = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
}
export default exportedObject

// const getUser =(idUser)=>{
//     return instance.get ("/buscar") {
        
//     }
// }
//import http from "../../http-common";
