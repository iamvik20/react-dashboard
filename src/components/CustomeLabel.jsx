const CustomLabel = ({ viewBox, noOfBubbleTeaSold = 0 }) => {
    const { cx, cy } = viewBox;
    return (
      <>
        <text x={cx - 20} y={cy - 5}>
          <tspan
            style={{
              fontWeight: 900,
              fontSize: "1.5em",
              fill: "black",
              fontFamily: "sans-serif"
            }}
          >
            {noOfBubbleTeaSold}%
          </tspan>
        </text>
        <text x={cx - 52} y={cy + 15}>
          <tspan
            style={{
              fontSize: ".7em",
              fill: "black",
              textAlign: 'center',
              fontFamily: "sans-serif",
            }}
          >
            Total New Customers
          </tspan>
        </text>
      </>
    );
  };

  export default CustomLabel;