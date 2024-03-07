import colors from './colors';

const padding = {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
};

const margin = {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
};

const borderRadius = {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
};

const container={
    flex: 1,
    padding: padding.md,
    backgroundColor: "#f0f0f0",
};

const title={
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
};

const text={
    fontSize: 16,
    color: colors.text,
};

const commonStyles = {
    padding,
    margin,
    borderRadius,
    container,
    title,
    text,
};

export default commonStyles;