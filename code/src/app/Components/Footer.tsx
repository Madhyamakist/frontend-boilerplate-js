export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-center">
            <p className="text-[#5A2A27] text-sm">
                © {currentYear} xyz. All rights reserved.
            </p>
        </footer>
    );
}