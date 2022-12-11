import { userDetail } from "../../service/userDetail.service"
export const SHOW_DETAIL = "SHOW_DETAIL";

export const userDetails = (page) => {
    return (dispatch) => {
        userDetail(page)
            .then((data) =>
                dispatch({
                    type: SHOW_DETAIL,
                    payload: data?.data,
                },
                )
            )
    }
}