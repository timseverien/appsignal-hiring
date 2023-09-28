import Card from "@/components/Card";
import Tooltip from "@/components/Tooltip";

function MetadataDistributionAttribute({ distribution }) {
  return (
    <div>
      <h3>
        {distribution.name} ({distribution.unique})
      </h3>
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
