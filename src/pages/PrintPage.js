import { Helmet } from "react-helmet-async";
// containers
import Name from "containers/profile/Name";
import Content from "containers/profile/Content";

const PrintPage = () => {
  return (
    <>
      <Helmet>
        <title>김민서(Minseo Kim) PROFILE</title>
      </Helmet>

      <Name isPrint={true} />
      <Content isPrint={true} />
    </>
  );
};

export default PrintPage;
