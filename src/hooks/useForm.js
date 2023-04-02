import { useEffect, useMemo, useState } from 'react'

 export const useForm = ( initialForm = {}, formValidations = {} ) => {

    const [formState, setFormState] = useState( initialForm )
    const [ formValidation, setFormValidation ] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ])

    const isFormValid = useMemo( () => {
        console.log(formValidation)

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== true ) return false;
        }

        return true;
    }, [ formValidation ])

    const onInputChange = ({ target }) => {
      const { name, value } = target;
      setFormState({
          ...formState,
          [ name ]: value
      });
    }

    const onResetForm = () => {
      setFormState( initialForm );
    }

    const createValidators = () => {

      const formCheckedValues = {}

      for (const formField of Object.keys( formValidations )) {

        const [ fn, errorMessage ] = formValidations[formField];
        //console.log(formState[formField])
        formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? true : errorMessage;
      }

      setFormValidation( formCheckedValues );
      console.log(formCheckedValues)
    }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    ...formValidation,
    isFormValid

   }
 }
