type FooterProps = {
    name: string;
    year: number;
};

function Footer ({ name, year }: FooterProps) {
    return (
        <footer>
            <p>&copy; {year} {name}</p>
        </footer>
    );
}

export default Footer;