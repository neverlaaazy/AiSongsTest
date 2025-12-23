import { useEffect, useState } from 'react';
// import { useInput } from './UseInput';
import { useForm } from 'react-hook-form';
import './FormCreateSet.css';

export function FormCreateSet(){
    // const [name, setName] = useInput('');
    // const [discription, setDiscription] = useInput('');

    // function handleSubmit(e){
    //     e.preventDefault();
    //     console.log(`Название набора: ${name};\nОписание: ${discription}.`);
    // }

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if(count !== 0){
            console.log(`Отправка формы: ${count}`);
            alert(`Отправка формы: ${count}`);
        }
    },[count]);

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues:{
            name: "",
            discription: ""
        }
    });
    // console.log(errors);

    return (
        <form onSubmit={handleSubmit((data) => {
            setCount(count+1);
            console.log(data);
        })}>
            <div className='form__item'>
                <label htmlFor="name">
                    Название набора:
                </label>
                <input 
                    type="text" 
                    name='name' 
                    id='name'
                    {...register("name",{
                        required:"Заполните поле Названия набора", 
                        minLength:{
                            value:4,
                            message: "Название набора должно содержать минимум 4 символа"
                        }
                })}/>
                <p className='error-msg'>{errors.name?.message}</p>
            </div>
            <div className='form__item'>
                <label htmlFor="discription">
                    Описание:
                </label>

                <textarea 
                    name="discription" 
                    id="discription"
                    {...register("discription",{required: "Заполните поле Описание набора"})}>
                </textarea>
                <p className='error-msg'>{errors.discription?.message}</p>

            </div>
            <div className='form__item'>
                <input className='form__item_button' type="submit" value="Создать сет"/>
            </div>
        </form>
    );
}