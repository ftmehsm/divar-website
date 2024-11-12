import { useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, getAllCategories } from "@/services/admin";
import Loader from "../modules/Loader";

function CategoryList() {
  const queryClient = useQueryClient();
  const { data, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const deleteHandler = (id) => {
    deleteCategory(id);
    queryClient.invalidateQueries("categories");
  };

  return (
    <div>
      {isPending && <Loader />}
      {data?.data.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center font-Vazir-Medium border mb-3 p-1 rounded-md"
        >
          <div className="flex justify-between">
            <img src={`${item.icon}.svg`} alt="icom" className="ml-3" />
            <h5 className="ml-10">{item.name}</h5>
            <p className=" text-Primary">{item.slug}</p>
          </div>
          <button
            className="w-[80px] bg-Primary text-white p-3 rounded-md "
            onClick={() => deleteHandler(item._id)}
          >
            حذف
          </button>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
