export default function Footer() {
return (
<footer className="border-t border-white/10 py-8">
<div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-gray">
<div>© {new Date().getFullYear()} Автосервис «Империя», Брест</div>
<div>Сделано с любовью к автомобилям</div>
</div>
</footer>
);}