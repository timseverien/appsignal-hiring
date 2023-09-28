import Card from "@/components/Card";
import Tooltip from "@/components/Tooltip";
import { useSingleton } from "@tippyjs/react";
import Link from "next/link";

function pickByFraction(array, fraction) {
  const index = Math.round(fraction * (array.length - 1));
  return array[index];
}

function MetadataDistributionAttribute({ barColors, distribution }) {
  const distributionFractionFormatter = new Intl.NumberFormat("en", {
    style: "percent",
    maximumFractionDigits: 1,
  });

  const distributionsAggregated =
    distribution.distributions.length > 10
      ? // Note that instead of getting the first *10* items and group the remaining ones in the "other" distribution, we’re getting the first 9! This prevents us from ending up with 11 segments in our bar.
        distribution.distributions.slice(0, 9).concat([
          {
            key: "other",
            value: distribution.distributions
              .slice(9)
              .reduce((sum, d) => sum + d.value, 0),
          },
        ])
      : distribution.distributions;

  const barData = distributionsAggregated.map((d) => ({
    key: d.key,
    segmentFraction: d.value,
    tooltipContent: `${d.key} ${distributionFractionFormatter.format(
      d.value / distribution.total
    )}`,
  }));

  return (
    <div class="space-y-2">
      <h3>
        {distribution.name} ({distribution.unique})
      </h3>
      <MetadataDistributionBar colors={barColors} data={barData} />
    </div>
  );
}

function MetadataDistributionBar({ colors, data, tooltipTarget }) {
  return (
    <div className="flex basis-0 gap-px rounded-md overflow-hidden">
      {data.map((segment, segmentIndex) => {
        const color = pickByFraction(
          colors,
          1 - segmentIndex / (data.length - 1)
        );

        return (
          <Tooltip content={segment.tooltipContent} target={tooltipTarget}>
            <Link
              href={`#${segment.key}`}
              className={`block overflow-hidden h-2 ${color} hover:bg-black focus:bg-black`}
              style={{ flexGrow: segment.segmentFraction }}
            >
              <span class="sr-only">{segment.key}</span>
            </Link>
          </Tooltip>
        );
      })}
    </div>
  );
}

export default function MetadataDistributions({ distributions }) {
  // Using a Tippy singleton so I can define the content in MetadataDistributionBar
  const [tooltipSource, tooltipTarget] = useSingleton();

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
    <>
      <Card>
        <div class="p-3">
          <h2>Metadata distributions</h2>
        </div>

        {distributions.map((d, i) => (
          <div class="p-3">
            <MetadataDistributionAttribute
              barColors={barColors[i % barColors.length]}
              distribution={d}
              key={d.name} // I’d rather use an ID or key
              tooltipTarget={tooltipTarget}
            />
          </div>
        ))}
      </Card>
      <Tooltip target={tooltipSource} />
    </>
  );
}
