import styled from 'styled-components';
import { Table } from 'antd';

const StyledTable = styled(Table)`
  border: 1px solid #e3e3e3;
  border-radius: 0.375rem;
  background-color: #fff;

  .ant-table-thead > tr > th {
    color: white;
    font-size: 13.98px;
    background: #353535;
  }

  .ant-table-thead > tr > th:hover {
    color: black;
  }

  .ant-table-tbody > tr {
    font-size: 12.5px;
    background-color: #e7e7e7;
  }

  .ant-table-tbody > tr:nth-child(2n) {
    color: #353535;
    background-color: #fff;
  }
`;

export default StyledTable;
