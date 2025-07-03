import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WrenchIcon } from "lucide-react";

export default function ElektroHeld24() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-blue-50 text-gray-900">
      <header className="bg-blue-700 text-white py-8 shadow-md">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <img
            src="https://example.com/logo.png"
            alt="ElektroHeld24 Logo"
            width={60}
            height={60}
            className="rounded-full border border-white"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
          <div>
            <h1 className="text-4xl font-bold">ElektroHeld24</h1>
            <p className="text-orange-300 mt-1 text-lg">Reparaturservice für Haushaltsgeräte in Lüneburg</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 grid gap-8">
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Ihr Gerät streikt? Ich helfe!</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Ob Waschmaschine, Trockner, Geschirrspüler, Kaffeemaschine oder Mikrowelle – ich bringe Ihre Technik wieder in Schwung.
            Auch Installationen neuer Geräte und kleinere Elektroreparaturen übernehme ich gern.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Warum ElektroHeld24?</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Schnelle Terminvergabe</li>
                <li>Faire Festpreise – keine versteckten Kosten</li>
                <li>Vor-Ort-Service in Lüneburg + 20 km Umkreis</li>
                <li>Reparatur statt Neukauf – nachhaltig & günstig</li>
                <li>Zuverlässiger Service vom erfahrenen Mechatroniker</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <WrenchIcon className="text-blue-700" /> Kontaktformular
              </h3>
              <form className="grid gap-4">
                <input type="text" placeholder="Ihr Name" className="p-2 border rounded" required />
                <input type="email" placeholder="Ihre E-Mail-Adresse" className="p-2 border rounded" required />
                <textarea placeholder="Ihre Nachricht" rows={4} className="p-2 border rounded" required />
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">Absenden</Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <p className="text-sm text-gray-600">
            Oder kontaktieren Sie mich direkt per E-Mail:{" "}
            <a href="mailto:elektroheld24@outlook.de" className="text-blue-600">
              elektroheld24@outlook.de
            </a>
          </p>
        </section>
      </main>

      <footer className="bg-blue-700 text-white py-4 text-center text-sm">
        <p>&copy; {currentYear} ElektroHeld24 – Reparaturservice für Haushaltsgeräte</p>
      </footer>
    </div>
  );
}
