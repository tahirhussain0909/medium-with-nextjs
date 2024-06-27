export const Avatar = () => {
  return (
    <div className="rounded-full p-1 hover:bg-gray-100 focus:outline-none">
      <img
        src="https://miro.medium.com/v2/resize:fill:64:64/1*dmbNkD5D-u45r44go_cf0g.png"
        width="32"
        height="32"
        className="rounded-full border"
        alt="Avatar"
      />
      <span className="sr-only">Toggle user menu</span>
    </div>
  );
};
