export interface IconProps {
    /**
     * The icon name provided in the styles
     */
    iconName: string;

    /**
     * Three different styles to be called for the icon size styling
     * icon-sm = 1.2em or 19.2px, icon-lg = 1.6em or 25.6px, icon-xl = 2em or 32px, icon-xxl = 2.5em or 40px
     */
    sizeVariant: 'icon-sm' | 'icon-lg' | 'icon-xl' | 'icon-xxl';

    /**
     * Four different styles to be called for the icon color styling
     * icon-black (#010b13) / icon-white (#fcfcfc) / icon-primary-green(#02c9a5)
     */
    colorVariant: 'icon-black' | 'icon-white' | 'icon-primary-green';

    /**
     * Optional props if the icon change size when screen size is mobile max-width: 768px
     * changes font-size to 24px
     */
    mobileIcon?: boolean;
}
