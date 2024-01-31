const rawColors = {
    shuttleGrey: '#576270',
    slateGrey: '#aebed1',
    onahau: '#C7DFFF',
    yellow: '#FFE3AD',
    reef: '#C2FFBA',
    bitterSweet: '#FF9E9D',
    darkRed: '#fd6b6a'
}

const colors = {
    white: '#f7f7f7',
    black: '#222',
    grey: `${rawColors.slateGrey}`,
    red: `${rawColors.bitterSweet}`,
    redDarkened: `${rawColors.darkRed}`,
    primaryBlue: `${rawColors.shuttleGrey}`,
    secondaryBlue: `${rawColors.slateGrey}`,
    yellow: `${rawColors.yellow}`,
    green: `${rawColors.reef}`,
    lightBlue: `${rawColors.onahau}`
}

const contentWidth = '1070px';

const breakPoints = {
    ultrawide: 'min-width: 1150px',
    xldesktop: 'min-width: 1024px',
    desktop: 'min-width: 768px',
    tablet: 'min-width: 660px',
    mobile: 'min-width: 440px'
}

const fontSizes = {
    title: '4.5rem',
    xlarge: '3.2rem',
    large: '2.4rem',
    medium: '1.8rem',
    normal: '1.6rem'
}

const linkColors = {
    repo: '#e7503a',
    app: '#383535'
}

const layout = {
    sidebarWidth: '240px',
    headerHeight: '60px',
    footerHeight: '85px'
}

export { colors, breakPoints, layout, fontSizes, linkColors, contentWidth };