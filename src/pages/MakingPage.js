import { Helmet } from "react-helmet-async";
// containers
import Name from "containers/profile/Name";
import Hexagonal from "containers/making/Hexagonal";
import HexagonalText from "containers/making/HexagonalText";
import Content from "containers/making/Content";
// components
import Title from "components/making/Title";
import TopBtn from "components/making/TopBtn";

const MakingPage = () => {
  return (
    <>
      <Helmet>
        <title>MIN#log - Making</title>
      </Helmet>

      <Name />
      <Hexagonal />
      <Title message="FBWE - For Better Web Experience." />
      <Title message="더 나은 웹 서비스를 위해" />
      <HexagonalText />
      <Content />

      <TopBtn />
    </>
  );
};

export default MakingPage;
