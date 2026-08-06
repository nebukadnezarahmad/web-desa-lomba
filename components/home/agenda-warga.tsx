import {
  MapPinIcon,
  ClockIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { agendaMendatang, type Agenda } from "@/lib/data/agenda";
import { formatTanggalPendek, namaHari } from "@/lib/utils";

const toneJenis: Record<Agenda["jenis"], "green" | "blue" | "netral"> = {
  Musyawarah: "blue",
  Kesehatan: "green",
  "Gotong royong": "green",
  Pelatihan: "blue",
  Budaya: "netral",
};

export function AgendaWarga() {
  return (
    <Section latar="lembut">
      <SectionHeading
        kicker="Kalender Warga"
        judul="Agenda yang akan datang"
        deskripsi="Kegiatan desa sebulan ke depan. Catat tanggalnya, hadir bila berkenan."
      />

      <ol className="flex flex-col">
        {agendaMendatang.map((a, i) => (
          <Reveal as="li" key={a.judul} index={i}>
            <div className="group grid gap-4 border-b border-line py-6 transition-colors first:border-t first:border-line sm:grid-cols-[7.5rem_1fr] sm:gap-8">
              <div className="flex items-baseline gap-2 sm:flex-col sm:gap-0.5">
                <span className="text-xl font-extrabold tracking-tight text-green-strong">
                  {formatTanggalPendek(a.tanggal)}
                </span>
                <span className="text-[0.8125rem] font-medium text-ink-faint">
                  {namaHari(a.tanggal)}
                </span>
              </div>

              <div>
                <div className="mb-2.5">
                  <Badge tone={toneJenis[a.jenis]}>{a.jenis}</Badge>
                </div>
                <h3 className="text-[1.0625rem] font-bold text-ink">
                  {a.judul}
                </h3>
                <ul className="mt-3 flex flex-col gap-1.5 text-[0.9375rem] text-ink-muted sm:flex-row sm:flex-wrap sm:gap-x-6">
                  <li className="flex items-center gap-2">
                    <ClockIcon
                      size={16}
                      weight="duotone"
                      className="shrink-0 text-green-strong"
                    />
                    {a.waktu}
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPinIcon
                      size={16}
                      weight="duotone"
                      className="shrink-0 text-green-strong"
                    />
                    {a.lokasi}
                  </li>
                  <li className="flex items-center gap-2">
                    <UsersThreeIcon
                      size={16}
                      weight="duotone"
                      className="shrink-0 text-blue-strong"
                    />
                    {a.penyelenggara}
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
