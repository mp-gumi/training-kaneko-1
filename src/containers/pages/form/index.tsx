/** @jsxImportSource @emotion/react */
import React, { forwardRef, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { css } from "@emotion/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";

type FieldValues = { name: string; age: number };

const schema = yup.object().shape({
  name: yup.string().trim().required("名前を入力してください。"),
  age: yup.number().positive().integer().required(),
});

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
    reValidateMode: "onBlur",
  });

  const onSubmit = useCallback<SubmitHandler<FieldValues>>(
    (data) => console.log(data),
    []
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">name</label>
      <input
        css={css`
          border: 1px solid #000;
        `}
        defaultValue="name"
        {...register("name")}
        id="name"
      />
      <ErrorMessage errors={errors} name="name" />
      <br />
      <label>
        age
        <input
          css={css`
            border: 1px solid #000;
          `}
          {...register("age", { required: true })}
        />
        <ErrorMessage
          errors={errors}
          name="age"
          render={({ message }) => (
            <div>年齢を半角数字で入力してください。</div>
          )}
        />
      </label>
      <button
        css={css`
          border: 1px solid #000;
          background: #ddd;
        `}
        type="submit"
      >
        送信
      </button>
    </form>
  );
};

export default Form;
