import { Formik, Form } from 'formik';
import TextInput from './CustomComponents/TextInput';
import './styles.css';

const validate = (values) => {
    const errors = {}
    if(!values.name){
        errors.name = 'Campo requerido'
    }else if (values.name.length < 5){
        errors.name = 'Nombre muy corto'
    }

    if(!values.lastname){
        errors.lastname = 'Campo requerido'
    }else if (values.lastname.length < 5){
        errors.lastname = 'Apellido muy corto'
    }
    //propiedad del objeto que debe tener el mismo nombre que el campo que valido
    //ejemplo name = errors.name, lastname = errors.lastname
    return errors
}

const FormikFormCustomComp = () => {

    return(
        <Formik
            initialValues={{name: '', lastname: '', email: '',}}
            validate={validate}
            onSubmit={values => console.log(values)}
        >
            <div className='mainFormikForm'>
                <h4>Ejemplo de formulario usando Formik con componentes custom</h4>
                <Form>
                    <div className='formContainer'>
                        {/* componente de input custom */}
                        <TextInput name='name' label='Nombre' autoComplete='off'/>
                        <TextInput name='lastname' label='Apellido' autoComplete='off'/>
                        <TextInput name='email' label='Email' autoComplete='off'/>
                        <button
                            type="submit"
                            className='acceptFormikButton'
                        >
                            Aceptar
                        </button>
                    </div>
                </Form>
                <h6>Abrir consola para ver el funcionamiento</h6>
            </div>
        </Formik>
    )
}

export default FormikFormCustomComp;