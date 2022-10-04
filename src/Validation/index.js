import * as Yup from 'yup'

const pattern = /.+|.(pdf|jpg|jpeg)/i;

export const detailSchema = Yup.object({
    pincode:Yup.string().min(6).max(6).required("Cannot Be Empty"),
    country:Yup.string().required("Cannot Be Empty"),
    state:Yup.string().required("Cannot Be Empty"),
    bldgNumber:Yup.string().required("Cannot Be Empty"),
    bldgName:Yup.string().required("Cannot Be Empty"),
    street:Yup.string().required("Cannot Be Empty"),
    docNumber:Yup.string().required("Cannot Be Empty"),
    dateOFIssue:Yup.string().required("Cannot Be Empty"),
    file:Yup
    .mixed()
    .nullable()
    .required()
    .test({
        name:"FILE_FORMAT",
        test(value,ctx){
            if(!value){
                return ctx.createError({ message: 'Cannot Be empty' });
            }
            if(value.size > 2000000){            
                return ctx.createError({ message: 'File Size Limit : 2MB' });
            }
            if(value.type !== "application/pdf" && value.type !== "image/jpg" && value.type !== "image/jpeg"){              
                return ctx.createError({ message: 'Unsupported Format' });
            }
            return true;
        }
    }),
        
})