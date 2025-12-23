import { useForm } from 'react-hook-form';
import './FormCreateCard.css';

export function FormCreateCard(){

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues:{
            front: "",
            back: ""

        }
    });

    return(
        <form onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <div className='form__item'>
                <label htmlFor='front'>
                Передняя сторона карточки:
                </label>
                <input 
                    type="text" 
                    name='front'
                    id='front'
                    {...register("front",{
                        required: "Заполните поле"
                })}/>
                <p className='error-msg'>{errors.front?.message}</p>
            </div>
            <div className='form__item'>
                <label htmlFor='back'>
                Задняя сторона карточки:
                </label>
                <input 
                    type="text" 
                    name='back'
                    id='back'
                    {...register("back",{
                        required: "Заполните поле"
                })}/>
                <p className='error-msg'>{errors.back?.message}</p>
            </div>
            <div className='form__item'>
                <input className='form__item_button' type="submit" value="Создать карточку"/>
            </div>
        </form>
    );
}