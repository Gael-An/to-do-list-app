import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { categoriesState, categoryState } from "../atoms";

interface IForm {
  newCategory: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [categories, setCategories] = useRecoilState(categoriesState);
  const setCategory = useSetRecoilState(categoryState);

  const handleValid = ({ newCategory }: IForm) => {
    setCategories([...categories, newCategory]);
    setValue("newCategory", "");
    setCategory(newCategory);
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("newCategory", {
          required: "Please write a category",
        })}
        placeholder="Write a category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
