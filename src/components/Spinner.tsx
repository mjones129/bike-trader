import DotLoader from 'react-spinners/DotLoader'

const override = {
  display: 'block',
  margin: '100px auto',
};



const Spinner = ({ loading }: { loading: any }) => {
  return (
    <DotLoader
      color="#3f6212"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner
