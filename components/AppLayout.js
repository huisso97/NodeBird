const AppLayout = ({ children }) => {
  return (
    <div>
      <div>공통메뉴</div>
      {children}
    </div>
  );
};

AppLayout.prototypes = {
  children: Prototypes.node.isRequired,
};

export default AppLayout;
