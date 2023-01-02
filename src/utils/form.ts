export const convertToOptions = ({
  data,
}: {
  data: any[];
}) => {
  return data.map((item) => {
    return {
      value: item,
      label: item,
    };
  });
};
