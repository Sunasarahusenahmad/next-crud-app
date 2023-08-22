import React from "react";
import AddUser from "../../components/user_cmp/AddUser";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <AddUser id={id} />
    </>
  );
};

export default index;
