export const ACTION_UPDATE ='ACTION_UPDATE'; 

export const almacenar_proyecto = (proyect)=>{
    return {
        type: ACTION_UPDATE,
        payload: {
            Titulo: proyect.titulo,
            Descripcion:proyect.Descripcion,
            video:proyect.video,
            facebook: proyect.facebook,
            twitter: proyect.twitter,
            instagram: proyect.instagram,
            website: proyect.website,
        }
    }
}