export const getInitials = (fullName: string): string => {
  return fullName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');
};
