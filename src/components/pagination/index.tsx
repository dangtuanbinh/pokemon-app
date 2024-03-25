import { IPaginationProps } from "../../utils/types/commonTypes";
import "./styles.scss";
import { Pagination } from "antd";

const classNamePrefix = "pagination-section";

const PaginationSection: React.FC<IPaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
}) => {
  return (
    <div className={`${classNamePrefix} d-flex flex-direction-row justify-content-center`}>
      <Pagination
        defaultCurrent={1}
        total={totalItems}
        defaultPageSize={itemsPerPage}
        onChange={(pageNumber) => paginate(pageNumber)}
        size="small"
      />
    </div>
  );
};

export default PaginationSection;
