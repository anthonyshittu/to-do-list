import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Button from '../Button';
import './styles.scss';

const Form = ({ onSubmit, id, name, desc, createdAt }) => {
    const { handleSubmit, register } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                ref={register}
                type="text"
                id="id"
                name="id"
                defaultValue={id}
                hidden
            />
            <input
                ref={register}
                type="number"
                id="createdAt"
                name="createdAt"
                defaultValue={createdAt}
                hidden
            />
            <label>Name</label>
            <br />
            <input
                ref={register}
                type="text"
                id="name"
                name="name"
                defaultValue={name}
            />
            <br />
            <label>Description:</label>
            <br />
            <textarea
                ref={register}
                type="text"
                id="desc"
                name="desc"
                defaultValue={desc}
            />
            <br />
            <br />
            <Button classes="button button--primary" text="Add" type="submit" />
        </form>
    );
};

export default Form;

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Form.defaultProps = {
    id: '',
    name: '',
    desc: '',
    createdAt: ''
};
