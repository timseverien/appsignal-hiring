import Card from "@/components/Card";
import Tooltip from "@/components/Tooltip";

function MetadataDistributionAttribute({ distribution }) {
  const barData = distribution.distributions.map((d) => ({
    key: d.key,
    segmentFraction: d.value,
  }));

  return (
    <div>
      <h3>
        {distribution.name} ({distribution.unique})
      </h3>
      <MetadataDistributionBar data={barData} />
    </div>
  );
}

function MetadataDistributionBar({ data }) {
  return (
    <div className="flex basis-0 gap-px rounded-md overflow-hidden">
      {data.map((segment) => (
        <button
          className="bg-blue-100 overflow-hidden h-2"
          style={{ flexGrow: segment.segmentFraction }}
        >
          <span class="sr-only">{segment.name}</span>
        </button>
      ))}
    </div>
  );
}

export default function MetadataDistributions({ distributions }) {
  return (
    <Card>
      <Tooltip content="I'm a tooltip">
        <>
          <h2>Metadata distributions</h2>
          {distributions.map((d) => (
            <MetadataDistributionAttribute distribution={d} key={d.name} />
          ))}
        </>
      </Tooltip>
    </Card>
  );
}
