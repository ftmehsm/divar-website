import { createCategory } from "@/services/admin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function CategoryForm() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({
    name: "",
    slug: "",
    icon: "",
  });
  const { data, mutate, isPending } = useMutation({
    mutationFn: createCategory,
    onSuccess:() => queryClient.invalidateQueries("categories")
  });


  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
    if (data?.status === 201) {
      setForm({ name: "", slug: "", icon: "" });
    }
  };

  return (
    <>
      <form
        onChange={changeHandler}
        onSubmit={submitHandler}
        className="flex flex-col justify-start items-start font-Vazir-Medium"
      >
        <h3 className="border-b-2 border-b-Primary font-Vazir-Bold text-lg mb-7">
          دسته بندی جدید
        </h3>
        {data?.status === 201 && <p>دسته بندی با موفقیت ایجاد شد</p>}
        <div className="flex flex-col mb-3">
          <label htmlFor="name">اسم دسته بندی</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-300 rounded-sm mt-1 px-1 "
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="slug">اسلاگ</label>
          <input
            type="text"
            name="slug"
            id="slug"
            className="border border-gray-300 rounded-sm mt-1 px-1"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="icon">آیکون</label>
          <input
            type="text"
            name="icon"
            id="icon"
            className="border border-gray-300 rounded-sm mt-1 px-1"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="bg-Primary text-white rounded-md p-1 mt-5 disabled:opacity-50"
        >
          ایجاد دسته بندی
        </button>
      </form>
    </>
  );
}

export default CategoryForm;
