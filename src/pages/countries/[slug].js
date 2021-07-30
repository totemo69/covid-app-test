import Link from 'next/link';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Card, Row, Col, Layout, Typography, Radio, Space } from 'antd';
import { LOADING_PREFIX, COVID_STATUS } from '../../utils/constant';
import {
  makeSelectLoading,
  makeSelectError,
} from '../../state/global/selector';
import { clearErrors } from '../../state/global/actions';
import { getDayOne } from '../../state/countries/actions';
import { makeSelectDayOne } from '../../state/countries/selector';
import StyledTable from '@/components/Table';

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

export function Country({ fetchDayOne, dayOneDetails, isLoading }) {
  const router = useRouter()
  const { slug } = router.query;
  
  const [status, setStatus] = useState(COVID_STATUS.CONFIRMED);

  useEffect(() => {
    if (slug) {
      fetchDayOne({slug, status});
    }
  }, [slug, status]);

  const onChange = (e) => {
    setStatus(e.target.value);
  }

  const columns = [
    {
      title: 'Date',
      dataIndex: 'Date',
      key: 'Date',
      sorter: {
        compare: (a, b) => moment(a.Date).unix() - moment(b.Date).unix(),
      },
    },
    {
      title: 'Cases',
      dataIndex: 'Cases',
      key: 'Cases',
      sorter: {
        compare: (a, b) => a.Cases - b.Cases,
      },
    },
  ];

  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Row>
          <Col>
            <Card title={slug} style={{ width: 600 }}>
              <Title level={4}>
                <Radio.Group onChange={onChange} value={status}>
                  <Space direction="vertical">
                    <Radio value={COVID_STATUS.CONFIRMED}>Confirm</Radio>
                    <Radio value={COVID_STATUS.RECOVERED}>Recovered</Radio>
                    <Radio value={COVID_STATUS.DEATHS}>Deaths</Radio>
                  </Space>
                </Radio.Group>
              </Title>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <StyledTable columns={columns} dataSource={dayOneDetails} loading={isLoading} />
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

Country.propTypes = {
  fetchDayOne: PropTypes.func,
  dayOneDetails: PropTypes.any,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.any,
  clearErrorMessage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.DAYONE),
  dayOneDetails: makeSelectDayOne(),
  errorMessage: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    fetchDayOne: (payload) => dispatch(getDayOne(payload)),
    clearErrorMessage: () => dispatch(clearErrors()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Country);