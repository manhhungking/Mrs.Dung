import React, { useState, useEffect, useContext } from "react";
import "../Style/houseList.css";
import "react-pagination-bar/dist/index.css";
import { Button, Col, Form, FormCheck, Nav, Row, Table } from "react-bootstrap";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { langContext } from "../App.js";
import en from "../lang/en.js";
import Translate from "react-translate-component";

const data = [
  {
    id: 1,
    type: "Chung cư",
    owner: "Ms Trinh",
    price: "1400000000",
    address:
      "Đường Quốc Lộ 13, Phường Thuận Giao, Thành phố Thuận An, Bình Dương",
    license: "Sổ hồng",
  },
  {
    id: 2,
    type: "Chung cư",
    owner: "minh an",
    price: "200000000",
    address: "Thành phố Thuận An, Bình Dương",
    license: "Hợp đồng mua bán",
  },
  {
    id: 3,
    type: "Đất thổ cư",
    owner: "nguyễn văn tịch",
    price: "830000000",
    address: "Đường Quốc Lộ 13, Xã Trừ Văn Thố, Huyện Bàu Bàng, Bình Dương",
    license: "Sổ hồng",
  },
  {
    id: 4,
    type: "Chung cư",
    owner: "ngocnguyen.bds71@gmail.com",
    price: "2640000000",
    address:
      "Đường Quốc Lộ 13, Phường Thuận Giao, Thành phố Thuận An, Bình Dương",
    license: "Sổ hồng",
  },
  {
    id: 5,
    type: "Nhà hẻm, ngõ",
    owner: "HUỲNH GIAO",
    price: "4500000",
    address: "Đường dx140, Phường Tân An, Thành phố thủ Dầu Một, Bình Dương",
    license: "Sổ hồng",
  },
  {
    id: 6,
    type: "Chung cư",
    owner: "C Xoan",
    price: "1450000000",
    address: "Đường Quốc Lộ 13, Phường Thuận Giác",
    license: "Sổ hồng",
  },
  {
    id: 7,
    type: "Nhà hẻm, ngõ",
    owner: "Tan Phuoc",
    price: "1800000000",
    address: "Đường Quốc Lộ 1, Phường Thuận Giác",
    license: "Sổ hồng",
  },
  {
    id: 8,
    type: "Đất thổ cư",
    owner: "Manh Hung",
    price: "1210000000",
    address: "Đường Quốc Lộ 8, Phường Tân Bình",
    license: "Sổ hồng",
  },
  {
    id: 9,
    type: "Nhà xưởng, nhà kho",
    owner: "Mrs. Dung",
    price: "1400000000",
    address: "Đường Quốc Lộ 13, Phường Bình Tân",
    license: "Hợp đồng mua bán",
  },
  {
    id: 10,
    type: "Đất thổ cư",
    owner: "Mrs. Phụng",
    price: "1200000000",
    address: "Xa lộ hà nội, TPHCM",
    license: "Sổ hồng",
  },
  {
    id: 11,
    type: "Nhà xưởng, nhà kho",
    owner: "Mr Khoi",
    price: "1800000000",
    address: "Phường Hòa Bình, Biên Hòa",
    license: "Hợp đồng mua bán",
  },
  {
    id: 12,
    type: "Đất thổ cư",
    owner: "Mr. Phan",
    price: "1100000000",
    address: "Phường Thanh Bình, Biên Hòa",
    license: "Sổ hồng",
  },
  {
    id: 13,
    type: "Đất thổ cư",
    owner: "Ms Loc",
    price: "1200000000",
    address: "Quận 10, TPHCM",
    license: "Sổ hồng",
  },
  {
    id: 14,
    type: "Nhà hẻm, ngõ",
    owner: "Ms Trang",
    price: "900000000",
    address: "Quận 7, TPHCM",
    license: "Hợp đồng mua bán",
  },
  {
    id: 15,
    type: "Đất thổ cư",
    owner: "Ms Thuy",
    price: "1300000000",
    address: "Quận 7, TPHCM",
    license: "Sổ hồng",
  },
];

function deleteProject(project) {
  console.log(project);
  // axios
  //   .post(URLCollection.removeProject, project)
  //   .then((res) => res.data)
  //   .catch((err) => {
  //     console.error("Wasn't able to delete property.", err);
  //     alert("Cannot delete! The project does not exist");
  //   });
}

export default function InfoTable() {
  const [posts, setPosts] = useState(data);
  const [tempPosts, setTempPosts] = useState([]);
  const [postsDel, setPostsDel] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const { lang, setLang } = useContext(langContext);

  useEffect(() => {
    axios({
      url: "http://127.0.0.1:8000/house/",
      method: "GET"
    })
      .then((res) => {
        console.log(res);
        setPosts(res.data);
        setTempPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(posts);
  const pagePostsLimit = 8;

  const handleFilterByType = () => {
    const filterElementValue = document.getElementById("filterByType").value;
    if (filterElementValue !== "select type") {
      const filtered = posts.filter(
        (post) => post.LoaiHinh === filterElementValue
      );
      setPosts(filtered);
    }
  };

  const handleFilterByLicense = () => {
    const filterElementValue = document.getElementById("filterByLicense").value;
    if (filterElementValue !== "select license") {
      const filtered = posts.filter(
        (post) => post.ChungNhanSoHuu === filterElementValue
      );
      setPosts(filtered);
    }
  };
  const removeElementById = (id) => {
    const postsAfterRemove = posts.filter((post) => post.house_id !== id);
    setPosts(postsAfterRemove);
  };
  const removeElementsById = (ids) => {
    const postsAfterRemove = posts.filter(
      (post) => !ids.includes(post.house_id)
    );
    setPosts(postsAfterRemove);
    setPostsDel([]);
  };
  const deleteBtn = (post) => {
    return (
      <button
        className="fa fa-trash"
        style={{
          color: "red",
          backgroundColor: "white",
          border: 0,
        }}
        onClick={() => {
          alert("You want to delete this row?");
          deleteProject(post);
          removeElementById(post.house_id);
        }}
      ></button>
    );
  };

  const searchHouseByOwner = () => {
    const owner = document.getElementById("filterByName").value;
    if (owner !== "") {
      const filteredPosts = posts.filter((post) =>
        post.TacGia.toLowerCase().includes(owner.toLowerCase())
      );
      setPosts(filteredPosts);
    }
  };

  const searchHouseByAddress = () => {
    const address = document.getElementById("filterByAddress").value;
    if (address !== "") {
      const filteredPosts = posts.filter((post) =>
        post.DiaChi.toLowerCase().includes(address.toLowerCase())
      );
      setPosts(filteredPosts);
    }
  };

  const checkedBoxCount = (post) => {
    const box = document.querySelectorAll(
      ".project".concat(post.house_id.toString()).concat(" .form-check-input")
    )[0];
    console.log(box);
    console.log(box.checked);
    if (box.checked) {
      setPostsDel([...postsDel, post]);
    } else {
      setPostsDel(postsDel.filter((p) => p.house_id !== post.house_id));
    }
  };

  const handlePageClick = (event) => {
    const newOffset = (event.selected * pagePostsLimit) % posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const switchArrow = () => {
    const arrow = document.getElementById("arrow");
    if (arrow.className === "fa fa-angle-up") {
      arrow.className = "fa fa-angle-down";
    } else {
      arrow.className = "fa fa-angle-up";
    }
    setPosts([
      ...posts.sort(function (a, b) {
        if (arrow.className === "fa fa-angle-up") {
          return a.LoaiHinh.localeCompare(b.LoaiHinh);
        } else {
          return b.LoaiHinh.localeCompare(a.LoaiHinh);
        }
      }),
    ]);
  };

  return (
    <div>
      <h2 style={{ marginTop: "1em" }}>
        <Translate content="houseList.title" />
      </h2>
      <hr />
      <div>
        <Form className="filterForm">
          <Form.Group as={Row} className="mb-3">
            <Col sm="3">
              <Form.Control
                type="text"
                id="filterByName"
                placeholder={
                  lang === en ? "Chủ sở hữu" : "Numéro de projet, nom"
                }
                style={{ marginTop: "4px" }}
              />
            </Col>
            <Col sm="3">
              <Form.Control
                type="text"
                as="select"
                id="filterByType"
                defaultValue="select type"
                style={{ marginTop: "4px" }}
              >
                <option value="select type">
                  {lang === en ? "Loại hình" : "L'état du projet"}
                </option>
                <option value="Chung cư">Chung cư</option>
                <option value="Đất thổ cư">Đất thổ cư</option>
                <option value="Nhà hẻm, ngõ">Nhà hẻm, ngõ</option>
                <option value="Nhà xưởng, nhà kho">Nhà xưởng, nhà kho</option>
              </Form.Control>
            </Col>
            <Button
              as="input"
              variant="primary"
              type="button"
              id="searchBtn"
              value={lang === en ? "Search" : "Rechercher un projet"}
              onClick={() => {
                searchHouseByOwner();
                searchHouseByAddress();
                handleFilterByType();
                handleFilterByLicense();
              }}
            ></Button>
            <Button
              as="input"
              variant="secondary"
              type="button"
              id="resetBtn"
              value={
                lang === en ? "Reset Search" : "Réinitialiser la recherche"
              }
              onClick={() => {
                window.location.reload();
                setPosts(tempPosts);
              }}
            ></Button>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm="3">
              <Form.Control
                type="text"
                id="filterByAddress"
                placeholder={lang === en ? "Địa chỉ" : "Numéro de projet, nom"}
              />
            </Col>
            <Col sm="3">
              <Form.Control
                type="text"
                as="select"
                id="filterByLicense"
                defaultValue="select license"
              >
                <option value="select license">
                  {lang === en ? "Chứng nhận sở hữu" : "L'état du projet"}
                </option>
                <option value="Đang chờ sổ">Đang chờ sổ</option>
                <option value="Hợp đồng mua bán">Hợp đồng mua bán</option>
                <option value="Vi bằng">Vi bằng</option>
                <option value="Có Sổ đỏ">Sổ đỏ</option>
                <option value="Hợp đồng Góp vốn">Hợp đồng Góp vốn</option>
              </Form.Control>
            </Col>
          </Form.Group>
        </Form>
      </div>
      <div style={{ minHeight: "509px" }}>
        <Table responsive>
          <thead>
            <tr>
              <th> </th>
              <th>
                <Translate content="houseList.LoaiHinh" />{" "}
                <button
                  className="fa fa-angle-up"
                  id="arrow"
                  style={{ backgroundColor: "white", border: "0" }}
                  onClick={switchArrow}
                ></button>
              </th>
              <th>
                <Translate content="houseList.TacGia" />
              </th>
              <th>
                <Translate content="houseList.SoDienThoai" />
              </th>
              <th>
                <Translate content="houseList.DienTich" />
              </th>
              <th>
                <Translate content="houseList.Gia" />
              </th>
              <th>
                <Translate content="houseList.DiaChi" />
              </th>
              <th>
                <Translate content="houseList.ChungNhanSoHuu" />{" "}
              </th>
              <th>
                <Translate content="houseList.delete" />
              </th>
            </tr>
          </thead>
          <tbody id="tableBody">
            {posts
              .slice(itemOffset, itemOffset + pagePostsLimit)
              .map((post) => {
                return (
                  <tr key={post.house_id}>
                    <td>
                      <Form>
                        <FormCheck
                          className={"project".concat(post.house_id)}
                          id={post.house_id}
                          onClick={() => {
                            checkedBoxCount(post);
                          }}
                        />
                      </Form>
                    </td>
                    <td>
                      <Nav.Link href={`\\editProject\\${post.house_id}`}>
                        {post.LoaiHinh}
                      </Nav.Link>
                    </td>
                    <td>{post.TacGia}</td>
                    <td>{post.SoDienThoai}</td>
                    <td>{post.DienTich}</td>
                    <td>{post.Gia}</td>
                    <td>{post.DiaChi}</td>
                    <td>{post.ChungNhanSoHuu}</td>
                    <td>{deleteBtn(post)}</td>
                  </tr>
                );
              })}
            <tr>
              <td
                colSpan="3"
                style={{ textAlign: "left", color: "blue" }}
                id="numOfSelected"
              >
                {postsDel.length}{" "}
                {lang === en ? "items selected" : "éléments sélectionnés"}
              </td>
              <td colSpan="6" style={{ textAlign: "right", color: "red" }}>
                <button
                  style={{
                    color: "red",
                    backgroundColor: "white",
                    border: 0,
                  }}
                  onClick={() => {
                    let ids = [];
                    alert("You want to delete these rows?");
                    for (const project of postsDel) {
                      ids.push(project.house_id);
                      deleteProject(project);
                    }
                    removeElementsById(ids);
                  }}
                >
                  {lang === en
                    ? "delete selected items"
                    : "supprimer les éléments sélectionnés"}{" "}
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div
        style={{ float: "right", marginRight: "18px", marginBottom: "19px" }}
      >
        <ReactPaginate
          nextLabel={lang === en ? "next >" : "> suivant"}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={Math.ceil(posts.length / pagePostsLimit)}
          previousLabel={lang === en ? "< previous" : "< précédente"}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
