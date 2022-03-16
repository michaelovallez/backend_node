'use strict'
var Project = require ('../models/project');
var fs = require('fs');
var controller = {
    home: function(req, res){
        return res.status (200).send({
            message: 'soy la home'
        });
    },
    test: function(req, res) {
        return res.status (200).send({
            message: 'metodo test del projectController'
        });
    },
    /**
     * create: por post recibe parametros y crea un nuevo objeto para la coleccion
     * @param {params} req 
     * @param {*} res 
     */
    create:  (req,res)=>{
        var project = new Project();
        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.langs = params.langs;
        project.tecnology = params.tecnology;
        project.year = params.year;
        project.image = null;
        project.save((err,projectStored)=>{
            if (err) return res.status (500).send({
                message: "Error al guardar el Documento"
            });
            if(!projectStored) return res.status(404).send({
                message: "No se ha podido guardar el documento"
            });
            return res.status(200).send({
                project: project,
                message: "Metodo SaveProject"
            });
        });
    },
    /**
     * index: por get devuelve todos los objetos de la coleccion project
     * @param {id} req --> busqueda por id 
     * @param {*} res 
     * @returns 
     */
    index: (req,res)=>{
        
        var projectId = req.params.id
        if(projectId==null) return getAll(res);
        return get(projectId,res);
        
        
    },
    /**
     * update: por put actualiza datos de un objetos indicado por id
     * @param {id} req 
     * @param {*} res 
     */
    update: (req,res)=>{
        var projectId = req.params.id;
        var update = req.body;
        Project.findByIdAndUpdate(projectId,update,{new:true},(err,projectUpdated)=>{
            if (err) return res.status (500).send({
                message: "Error al actualizar el Documento"
            });
            if(!projectUpdated) return res.status(404).send({
                message: "No se ha podido actualizar el documento"
            });
            return (res.status(201).send({
                project: projectUpdated,
                message:"documento actualizado correctamente"
            }));

        });
    },
    /**
     * delete: por delete elimina un objeto segun su id
     * @param {id} req 
     * @param {*} res 
     */
    delete: (req,res)=>{
        var projectId = req.params.id;
        
        Project.findByIdAndDelete(projectId,(err,projectDeleted)=>{
            if (err) return res.status (500).send({
                message: "Error al eliminar el Documento"
            });
            if(!projectDeleted) return res.status(404).send({
                message: "No se ha podido eliminar el documento"
            });
            return (res.status(200).send({
                project: projectDeleted,
                message:"documento eliminado correctamente"
            }));

        });
    },
    /**
     * uploadImage: por post, carga una imagen a un objeto determinado
     * @param {id, image} req 
     * @param {*} res 
     * @returns 
     */
    uploadImage: (req,res)=>{
        var projectId = req.params.id;
        var fileName = "imagen no subida...";
        if (req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];
            if (fileExt =='png'||fileExt =='jpg'||fileExt =='jpeg'||fileExt =='gif')
            {
                Project.findByIdAndUpdate(projectId,{image: fileName},{new:true},(err,projectUpdated)=>{
                    if(err) return res.status(500).send({
                        message: "la imagen no se ha subido"
                    });
                    if(!projectId) return res.status(404).send({
                        message: "el registro no existe"
                    })
                    return res.status(200).send({
                        project: projectUpdated
                    });
                });
            }else {
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({
                        message: "el formato del archivo ingresado no es correcto"
                        });
                });
                
            }
            
            
        } else {
            return res.status(200).send({
                message: fileName
            })
        }
    }
};
const get = (id,res)=> {
    Project.findById(id,(err,project)=>{
        if (err) return res.status(500).send({
            message: "error al devolver los datos"
        });
        if(!project) return res.status(404).send({
            message:"el proyecto no existe"
        });
        return res.status(200).send({
            project
        });
    });
}
const getAll= res=> {
    Project.find({}).sort('year').exec((err,project)=>{
        if (err) return res.status(500).send({
            message: "error al devolver los datos"
        });
        if(!project) return res.status(404).send({
            message:"el proyecto no existe"
        });
        return res.status(200).send({
            project
        });
    });
}
module.exports = controller;