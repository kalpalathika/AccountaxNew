import axios from "axios";

export const contactApi = async ({body}) => {
    try{
        const  {data} =  await axios({
            method: 'post',
            url: `${process.env.REACT_APP_BASE_URL}/v1/send-mail`,
            data: body
          });
          return data;
    }catch(e){
        return null;
    }

}