import './styles.css';

const NavBar = () => {
    return(
        <div className='root'>
            <a href='/basicForm'>Native React Forms</a>
            <a href='/formikForm'>Formik Forms</a>
            <a href='/formikFormValidations'>Formik Forms + Validation</a>
        </div>
    )
}

export default NavBar