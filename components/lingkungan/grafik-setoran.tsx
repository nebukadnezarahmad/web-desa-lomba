"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { setoranBankSampah } from "@/lib/data/sampah";

export function GrafikSetoran() {
  return (
    <div className="rounded-[var(--radius-panel)] border border-line bg-surface p-4 sm:p-6">
      <div className="h-[20rem] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={setoranBankSampah}
            margin={{ top: 8, right: 8, bottom: 20, left: 0 }}
          >
            <CartesianGrid stroke="var(--line)" vertical={false} />
            <XAxis
              dataKey="bulan"
              tick={{ fill: "var(--ink-muted)", fontSize: 12 }}
              stroke="var(--line-strong)"
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "var(--ink-muted)", fontSize: 12 }}
              stroke="var(--line-strong)"
              tickLine={false}
              width={56}
              tickFormatter={(v) => `${v} kg`}
            />
            <Tooltip
              cursor={{ fill: "var(--surface-soft)" }}
              contentStyle={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "0.75rem",
                fontSize: "0.8125rem",
              }}
              formatter={(nilai, nama) => [`${nilai} kg`, nama]}
            />
            <Legend
              verticalAlign="top"
              height={40}
              wrapperStyle={{ fontSize: "0.8125rem" }}
            />
            <Bar
              dataKey="organik"
              name="Organik (kompos)"
              fill="var(--green)"
              radius={[6, 6, 0, 0]}
              maxBarSize={38}
            />
            <Bar
              dataKey="anorganik"
              name="Anorganik (bank sampah)"
              fill="var(--blue)"
              radius={[6, 6, 0, 0]}
              maxBarSize={38}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-[0.8125rem] leading-relaxed text-ink-muted">
        Sampah organik diolah menjadi kompos di komposter komunal tiap dusun,
        sedangkan sampah anorganik bersih ditabung warga di bank sampah dan
        dihitung sebagai saldo.
      </p>
    </div>
  );
}
