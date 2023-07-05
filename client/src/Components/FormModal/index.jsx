import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
import "./FormModal.css";

const FormModal = ({
  formFlag,
  formatDate,
  onCreate,
  onEdit,
  onCancel,
  tableInfo,
}) => {
  return (
    <div className="formModal-container">
      {formFlag === "Create" ? (
        <CreateForm
          formatDate={formatDate}
          onSubmit={onCreate}
          onCancel={onCancel}
        />
      ) : (
        <EditForm
          formatDate={formatDate}
          onSubmit={onEdit}
          onCancel={onCancel}
          table={tableInfo}
        />
      )}
    </div>
  );
};

export default FormModal;
