import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  AddTask,
  DeleteTask,
  GetALlTask,
  UpdateStatus,
  UpdateTask,
} from "./redux/features/task.action";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Input,
} from "@headlessui/react";

const Card = ({ title, desc, createAt, status }) => {
  return (
    <div class="flex flex-col gap-2   sm:w-72 text-[10px] sm:text-xs z-50">
      <div class="error-alert cursor-default flex items-center justify-between w-full   sm:h-14 rounded-lg bg-black 505052] px-[10px]">
        <div>
          {/* <div class="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              ></path>
            </svg>
          </div> */}
          <div>
            <div className="my-3 ">
              <p className="text-center text-white">{createAt}</p>
              <div>
                <p class="text-white font-bold capitalize underline">{title}</p>
                <p class="text-white font-bold">{desc}</p>
              </div>
            </div>
          </div>
        </div>
        <button class="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const TaskForm = ({ btn }) => {
  const [open, setOpen] = useState(false);
  const [tittle, setTittle] = useState("");
  const [desc, setDesc] = useState("");
  const openModal = () => {
    setOpen(!open);
  };
  const disPatch = useDispatch();
  const TaskHandle = () => {
    if (tittle === "" || desc === "") {
      alert("Feilds cannot be null");
    }
    disPatch(AddTask({ tittle: tittle, description: desc }));
    setTittle("");
    setDesc("");
    setOpen(false);

  };

  return (
    <>
      <p onClick={openModal}>{btn}</p>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Add Your Task Here
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="opacity-40">Task Title</p>
                      <Input
                        type="text"
                        className="border p-3 rounded-md"
                        placeholder="Enter Yor Task Title.."
                        value={tittle}
                        onChange={(e) => setTittle(e.target.value)}
                      />
                    </div>
                    <div className="mt-2">
                      <p className="opacity-40">Task Description</p>
                      <Input
                        type="text"
                        className="border p-3 rounded-md"
                        placeholder="Enter Yor Task Desc.."
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  // onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                  onClick={TaskHandle}
                >
                  Add Now
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

const UpdateTaskForm = ({ btn, id }) => {
  console.log(id);
  const [open, setOpen] = useState(false);
  const [tittle, setTittle] = useState("");
  const [desc, setDesc] = useState("");
  const openModal = () => {
    setOpen(!open);
  };
  const disPatch = useDispatch();
  const TaskHandle = () => {
    if (tittle === "" || desc === "") {
      alert("Feilds cannot be null");
    }
    disPatch(UpdateTask({ id: id, tittle: tittle, description: desc }));
    setOpen(false);
    setTittle("");
    setDesc("");
  };

  return (
    <>
      <p onClick={openModal}>{btn}</p>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Add Your Task Here
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="opacity-40">Task Title</p>
                      <Input
                        type="text"
                        className="border p-3 rounded-md"
                        placeholder="Enter Yor Task Title.."
                        value={tittle}
                        onChange={(e) => setTittle(e.target.value)}
                      />
                    </div>
                    <div className="mt-2">
                      <p className="opacity-40">Task Description</p>
                      <Input
                        type="text"
                        className="border p-3 rounded-md"
                        placeholder="Enter Yor Task Desc.."
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  // onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                  onClick={TaskHandle}
                >
                  Add Now
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

const TaskList = () => {
  const { alltasks } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetch() {
      dispatch(await GetALlTask());
    }
    fetch();
  }, [dispatch]);

  const StatusHandle = (id) => {
    dispatch(UpdateStatus({ id }));
  };
  console.log(alltasks);

  const headings = [
    { key: "SN", value: "SN" },
    { key: "Task Tittle", value: "Task Tittle`" },
    { key: "Description", value: "Description" },
    { key: "Status", value: "Status" },
    { key: "Created At", value: "Created At" },
    { key: "Action", value: "Action" },
  ];

  const handleDelete = (id) => {
    console.log(id);
    dispatch(DeleteTask(id));
  };

  return (
    <div>
      <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
        <thead>
          <tr className="text-left">
            {headings?.map((heading) => (
              <th
                key={heading.key}
                className={`bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider capitalize text-xs ${heading.key}`}
              >
                {heading.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* <div className="grid grid-flow-row grid-cols-6 gap-6 m-2"> */}
          {alltasks?.map((ele, i) => (
            <tr key={ele._id}>
              <td className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider capitalize text-xs">
                {i + 1}
              </td>
              <td className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider capitalize text-xs">
                {ele.tittle}
              </td>
              <td className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider capitalize text-xs">
                {ele.description}
              </td>
              <td className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider capitalize text-xs cursor-pointer">
                <span className="opacity-40">
                  click here to Complete the Task
                </span>
                <p
                  onClick={() => StatusHandle(ele._id)}
                  className={`${
                    ele.status ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {ele.status ? "completed" : "incompleted"}
                </p>
              </td>
              <td className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider capitalize text-xs">
                {ele.createdAt}
              </td>
              <td className="flex  gap-2 bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider capitalize text-xs">
                <MdDelete
                  className="text-4xl text-red-500 font-bold border rounded-full p-1 bg-white"
                  onClick={() => handleDelete({ id: ele._id })}
                />
                {ele.status ? (
                  <p className="cursor-not-allowed">You Can't Edit Now</p>
                ) : (
                  <UpdateTaskForm
                    btn={
                      <FaEdit className="text-4xl text-blue-500 font-bold border rounded-full p-1 bg-white" />
                    }
                    id={ele._id}
                  />
                )}
              </td>
            </tr>
          ))}
          {/* </div>  */}
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openForm = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <p className="text-center uppercase font-bold text-blue-600">
        welcome to Your Dashboard
      </p>
      <div className="flex justify-between px-5">
        <p>All Tasks</p>
        <p
          className="bg-blue-700 text-white rounded-md px-4 my-4 py-2 cursor-pointer"
          onClick={openForm}
        >
          <TaskForm btn={"Add"} />
        </p>
      </div>

      <TaskList />
    </div>
  );
}

export default App;
