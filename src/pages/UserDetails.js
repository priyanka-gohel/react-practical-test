import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/pagination/Pagination';
import { userDetails } from '../redux/actions/Actions';
import '../css/UserDetail.css';

function UserDetails() {
    const data = useSelector((state) => state?.userData);
    const [userData, setUserData] = useState([]);
    const [page, setPage] = useState(1)
    const dispatch = useDispatch();

    let totalPage = data.total / 10;

    const handleChangePage = useCallback((page) => {
        dispatch(userDetails(page));
        setUserData(data?.users);
        setPage(page);
    }, [page])

    useEffect(() => {
        dispatch(userDetails(page));
        setUserData(data?.users);
    }, [page])

    return (
        <div className='user-detail'>
            <div className='container-fluid'>
            <h2 className='header'>User Details</h2>
                <div className="row user-row">
                    {userData?.map((item) => (
                        <div key={item?.id} className="col-xs-1 col-sm-1 col-md-2 col-lg-4 col user-col">
                            <div className='card shadow-lg user-card'>
                                <div className='user_profile'>
                                    <img src={item?.image} alt="" />
                                </div>
                                <div className='user_name'>
                                    <h3>{item?.firstName} {item?.lastName} </h3>
                                </div>
                                <div className='user_email'>
                                    <h6>{item?.email}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='pagination'>
                <Pagination
                    total={totalPage}
                    current={page}
                    onChangePage={handleChangePage}
                />
                </div>
            </div>
        </div>
    )
}

export default UserDetails