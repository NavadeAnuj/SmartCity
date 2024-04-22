import React from "react";
import "../../../assets/Syles/admin.css";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import CreateChart from "../../../components/CreateGraph";
import DonutChart from "../../../components/PieChart";

function Reports() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain bg__colort ext-white">
              <CardHeader className="bg__color">
                <CardTitle tag="h4" className="CardTitle ">
                  Operator Wise Collection
                </CardTitle>
                <p className="category">This is a daily collection Report</p>
              </CardHeader>
              <CardBody className="bg text-white bg__color">
                <Table className="tablesorter" responsive>
                  <thead className="text-black ">
                    <tr className="bg">
                      <th>Sr No</th>
                      <th>Username</th>
                      <th>Cash</th>
                      <th>Online</th>
                      <th>Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Diya</td>
                      <td>8000</td>
                      <td>9000</td>
                      <td>8Th February 2024</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Dhruvi</td>
                      <td>9000</td>
                      <td>4000</td>
                      <td>8Th February 2024</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Anuj</td>
                      <td>5000</td>
                      <td>9000</td>
                      <td>8Th February 2024</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div className=" mt-4 d-flex align-items-center, justify-between, gap-4">
          <div className=" bg__color p-4 w-50 rounded">
            <CardHeader>
              <CardTitle tag="h4" className="CardTitle">
                Operator Wise Reports
              </CardTitle>
            </CardHeader>
            <CardBody className="bg text-white">
              <DonutChart />
            </CardBody>
          </div>
          <div className=" bg__color p-4 w-50 rounded">
            <CardHeader>
              <CardTitle tag="h4" className="CardTitle">
                Operator Wise Total Reports
              </CardTitle>
            </CardHeader>
            <CardBody className="bg text-white">
              <CreateChart />
            </CardBody>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reports;
