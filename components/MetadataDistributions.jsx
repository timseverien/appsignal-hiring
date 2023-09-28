import Card from "@/components/Card";
import Tooltip from "@/components/Tooltip";

function pickByFraction(array, fraction) {
  const index = Math.round(fraction * (array.length - 1));
  return array[index];
}

function MetadataDistributionAttribute({ barColors, distribution }) {
  const barData = distribution.distributions.map((d) => ({
    key: d.key,
    segmentFraction: d.value,
  }));

  return (
    <div>
      <h3>
        {distribution.name} ({distribution.unique})
      </h3>
      <MetadataDistributionBar colors={barColors} data={barData} />
    </div>
  );
}

function MetadataDistributionBar({ colors, data }) {
  return (
    <div className="flex basis-0 gap-px rounded-md overflow-hidden">
      {data.map((segment, segmentIndex) => {
        const color = pickByFraction(
          colors,
          1 - segmentIndex / (data.length - 1)
        );

        return (
          <button
            className={`overflow-hidden h-2 ${color}`}
            style={{ flexGrow: segment.segmentFraction }}
          >
            <span class="sr-only">{segment.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function MetadataDistributions({ distributions }) {
  const barColors = [
    [
      "bg-green-100",
      "bg-green-200",
      "bg-green-300",
      "bg-green-400",
      "bg-green-500",
      "bg-green-600",
      "bg-green-700",
      "bg-green-800",
      "bg-green-900",
    ],
    [
      "bg-blue-100",
      "bg-blue-200",
      "bg-blue-300",
      "bg-blue-400",
      "bg-blue-500",
      "bg-blue-600",
      "bg-blue-700",
      "bg-blue-800",
      "bg-blue-900",
    ],
  ];

  return (
    <Card>
      <Tooltip content="I'm a tooltip">
        <>
          <h2>Metadata distributions</h2>
          {distributions.map((d, i) => (
            <MetadataDistributionAttribute
              barColors={barColors[i % barColors.length]}
              distribution={d}
              key={d.name}
            />
          ))}
        </>
      </Tooltip>
    </Card>
  );
}
