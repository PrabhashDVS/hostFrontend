import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
// import { API_URL } from '../../utils/constants';
import UserSideBar from '../../layout/UserSideBar';
import Swal from "sweetalert2";

const AllocatePanelmemberList = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const [searchKeyword, setSearchKeyword] = useState("")

  const filterTopic = filesList.filter((item) => {
    return item.allocatepnl_title.toLowerCase().includes(searchKeyword.toLowerCase())
  })

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get('https://af-group-project.herokuapp.com/getAllAllocatedPnlMembers');
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`https://af-group-project.herokuapp.com/download/allocatedPanelMembers/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      Swal.fire("Topic file is Downloaded!!", "Click ok to Continue", "success");
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };

  return (

    <div>

      <div className='row'>
        <div className='col-2'>
          {/*  panel member sidebar */}
          <UserSideBar/>
        </div>
        <div className='col-10'>

          <div className="files-container">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <input className='mt-5' placeholder="Search by PanelTitle" style={{ marginLeft: "79%", width: "12vw" }} onChange={(e) => {
              setSearchKeyword(e.target.value)
            }} />


            <table className='table mt-5 container'>
              <thead>
                <th>Panel title</th>
                <th>Description</th>
                <th>Download File</th>
              </thead>

              <tbody>
                {filterTopic.map((item) => {
                  return (
                    <tr>
                      <td>{item.allocatepnl_title}</td>
                      <td>{item.allocatepnl_description}</td>
                      <td> <a href="#/" style={{ textDecoration: "none" }} onClick={() =>
                        downloadFile(item._id, item.file_path, item.file_mimetype)
                      }
                      >
                        Download
                      </a></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

           
          </div>

        </div>
      </div>
    </div>

  );
};

export default AllocatePanelmemberList;
