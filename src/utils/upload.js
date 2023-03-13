import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "workandearn");
  data.append("cloud_name", "dn8if7wyf");

  try {
    const res = await axios.post('https://api.cloudinary.com/v1_1/dn8if7wyf/image/upload', data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
