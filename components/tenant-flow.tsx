const lanes = [
  { name: "Client", x: 90 },
  { name: "Identity provider", x: 280 },
  { name: "Your server", x: 470 },
  { name: "useGrant", x: 660, highlight: true },
];

const [client, idp, server, usegrant] = lanes.map((lane) => lane.x);

interface Message {
  from: number;
  to: number;
  y: number;
  label: string;
  reply?: boolean;
}

const messages: Message[] = [
  { from: client, to: idp, y: 110, label: "1. Request token" },
  { from: idp, to: client, y: 145, label: "Signed JWT", reply: true },
  { from: client, to: server, y: 195, label: "2. Request + JWT" },
  { from: server, to: usegrant, y: 245, label: "3. Validate token" },
  { from: usegrant, to: idp, y: 365, label: "4. Discovery + JWKS" },
  { from: idp, to: usegrant, y: 400, label: "Public keys", reply: true },
  {
    from: usegrant,
    to: server,
    y: 480,
    label: "5. Valid · { exp }",
    reply: true,
  },
  { from: server, to: client, y: 530, label: "6. Response", reply: true },
];

const notes = [
  { y: 268, lines: ["match issuer", "check exp · aud", "policy conditions"] },
  { y: 418, lines: ["verify signature"] },
];

const colors = {
  fg: "var(--color-fd-foreground)",
  muted: "var(--color-fd-muted-foreground)",
  border: "var(--color-fd-border)",
  card: "var(--color-fd-card)",
  primary: "var(--color-fd-primary)",
};

function Arrow({ from, to, y, label, reply }: Message) {
  const direction = Math.sign(to - from);
  const tip = to - direction * 4;
  const color = reply ? colors.muted : colors.fg;

  return (
    <g>
      <line
        x1={from}
        y1={y}
        x2={tip - direction * 6}
        y2={y}
        stroke={color}
        strokeWidth={1.5}
        strokeDasharray={reply ? "5 4" : undefined}
      />
      <path d={`M${tip},${y} l${-direction * 9},-5 v10 z`} fill={color} />
      <text
        x={(from + to) / 2}
        y={y - 8}
        textAnchor="middle"
        fontSize={13}
        fill={colors.fg}
        stroke={colors.card}
        strokeWidth={5}
        paintOrder="stroke"
      >
        {label}
      </text>
    </g>
  );
}

export default function TenantFlow() {
  const height = 580;

  return (
    <figure className="not-prose my-6 overflow-x-auto rounded-xl border bg-fd-card p-4">
      <svg
        viewBox={`0 0 750 ${height}`}
        className="mx-auto block w-full min-w-[600px] max-w-[750px] font-mono"
        role="img"
        aria-label="Sequence diagram of tenant token validation: the client gets a JWT from its identity provider and sends it to your server, your server asks useGrant to validate it, useGrant checks the claims and policy, fetches the provider's public keys to verify the signature, and returns the result to your server, which responds to the client."
      >
        {lanes.map((lane) => (
          <g key={lane.name}>
            <line
              x1={lane.x}
              y1={64}
              x2={lane.x}
              y2={height - 10}
              stroke={lane.highlight ? colors.primary : colors.muted}
              strokeOpacity={lane.highlight ? 1 : 0.6}
              strokeWidth={lane.highlight ? 2 : 1.5}
              strokeDasharray="4 4"
            />
            <rect
              x={lane.x - 78}
              y={20}
              width={156}
              height={44}
              rx={8}
              fill={colors.card}
              stroke={lane.highlight ? colors.primary : colors.muted}
              strokeOpacity={lane.highlight ? 1 : 0.5}
              strokeWidth={lane.highlight ? 2 : 1.5}
            />
            <text
              x={lane.x}
              y={47}
              textAnchor="middle"
              fontSize={14}
              fontWeight={600}
              fill={lane.highlight ? colors.primary : colors.fg}
            >
              {lane.name}
            </text>
          </g>
        ))}

        {notes.map((note) => (
          <g key={note.y}>
            <rect
              x={usegrant - 70}
              y={note.y}
              width={140}
              height={note.lines.length * 18 + 14}
              rx={6}
              fill={colors.card}
              stroke={colors.primary}
              strokeWidth={1}
            />
            {note.lines.map((line, i) => (
              <text
                key={line}
                x={usegrant}
                y={note.y + 21 + i * 18}
                textAnchor="middle"
                fontSize={12}
                fill={colors.muted}
              >
                {line}
              </text>
            ))}
          </g>
        ))}

        {messages.map((message) => (
          <Arrow key={message.label} {...message} />
        ))}
      </svg>
    </figure>
  );
}
