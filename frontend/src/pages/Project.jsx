import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navigation from "../components/Navigation";
import PorjectCard from "../components/Cards/ProjectCard";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Project = () => {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

    useEffect(() => {
        if (userInfo) {
            history.push('/project');
        } 
    },[history, userInfo])

  return (
    <>
      <Navigation />
      <Container fluid className="board-container">
        <Row className="h-100">
          <Col
            xxl="3"
            className="d-flex flex-column h-100 d-none d-md-block d-md-none d-lg-block  d-lg-none d-xl-block"
          >
            <Sidebar />
          </Col>
          <Col md="9" className="d-flex flex-column h-100">
            
            <h3><Breadcrumb>
              <Breadcrumb.Item href="/project">Projects</Breadcrumb.Item>
            </Breadcrumb></h3>
            
            <div className="row row-cols-xxl-4 row-cols-xl-3 row-cols-md-2 g-md-2 g-2">
              <div class="col">
                <PorjectCard />
              </div>
              <div class="col">
                <PorjectCard />
              </div>
              <div class="col">
                <PorjectCard />
              </div>
              <div class="col">
                <PorjectCard />
              </div>
              <div class="col">
                <PorjectCard />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Project;
