import Link from 'next/link';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Card, Row, Col, Layout, Typography } from 'antd';
import { LOADING_PREFIX, APP_ROUTE } from '../utils/constant';
import {
  makeSelectLoading,
  makeSelectLoadingStatus,
  makeSelectError,
} from '../state/global/selector';
import { clearErrors } from '../state/global/actions';
import { getSummary } from '../state/summary/actions';
import { makeSelectSummaryDetails } from '../state/summary/selector';
import StyledTable from '../components/Table';
const { Header, Footer, Content } = Layout;
const { Title } = Typography;

export function Summary({ fetchSummary, summaryDetails, isLoading }) {
  const {Global, Countries} = summaryDetails;
  useEffect(() => {
    fetchSummary();
  }, []);

  const columns = [
    {
      title: 'Country',
      dataIndex: 'Country',
      key: 'Country',
      render: (text, record) => (
        <Link href={`${APP_ROUTE.COUNTRY}/${record.Slug}`}>
          {record.Country}
        </Link>
      ),
    },
    {
      title: 'New Confirmed',
      dataIndex: 'NewConfirmed',
      key: 'NewConfirmed',
      sorter: {
        compare: (a, b) => a.NewConfirmed - b.NewConfirmed,
      },
    },
    {
      title: 'Total Confirmed',
      dataIndex: 'TotalConfirmed',
      key: 'TotalConfirmed',
      sorter: {
        compare: (a, b) => a.TotalConfirmed - b.TotalConfirmed,
      },
    },
    {
      title: 'New Deaths',
      dataIndex: 'NewDeaths',
      key: 'NewDeaths',
      sorter: {
        compare: (a, b) => a.NewDeaths - b.NewDeaths,
      },
    },
    {
      title: 'Total Deaths',
      dataIndex: 'TotalDeaths',
      key: 'TotalDeaths',
      sorter: {
        compare: (a, b) => a.TotalDeaths - b.TotalDeaths,
      },
    },
    {
      title: 'New Recovered',
      dataIndex: 'NewRecovered',
      key: 'NewRecovered',
      sorter: {
        compare: (a, b) => a.NewRecovered - b.NewRecovered,
      },
    },
    {
      title: 'Total Recovered',
      dataIndex: 'TotalRecovered',
      key: 'TotalRecovered',
      sorter: {
        compare: (a, b) => a.TotalRecovered - b.TotalRecovered,
      },
    },
  ];

  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Row>
          <Col>
            <Card title="GLOBAL" style={{ width: 600 }}>
              <Title level={5}>Date: {Global && Global.Date}</Title>
              <Title level={5}>New Confirmed: {Global && Global.NewConfirmed}</Title>
              <Title level={5}>Total Confirmed: {Global && Global.TotalConfirmed}</Title>
              <Title level={5}>New Deaths: {Global && Global.TotalDeaths}</Title>
              <Title level={5}>New Confirmed: {Global && Global.NewRecovered}</Title>
              <Title level={5}>Total Confirmed: {Global && Global.TotalRecovered}</Title>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <StyledTable columns={columns} dataSource={Countries} loading={isLoading} />
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

Summary.propTypes = {
  fetchSummary: PropTypes.func,
  summaryDetails: PropTypes.any,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.any,
  clearErrorMessage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.SUMMARY),
  loginStatus: makeSelectLoadingStatus(LOADING_PREFIX.SUMMARY),
  summaryDetails: makeSelectSummaryDetails(),
  errorMessage: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchSummary: () => dispatch(getSummary()),
    clearErrorMessage: () => dispatch(clearErrors()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Summary);