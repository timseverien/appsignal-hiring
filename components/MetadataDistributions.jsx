import Card from "@/components/Card";
import Tooltip from "@/components/Tooltip";

function MetadataDistributionAttribute({ distribution }) {
  return (
    <div>
      <h3>
        {distribution.name} ({distribution.unique})
      </h3>
      <MetadataDistributionBar data={[]} />
    </div>
  );
}

function MetadataDistributionBar({ data }) {
  return (
    <div className="flex basis-0 gap-px rounded-md overflow-hidden">
      <button
        className="bg-blue-100 overflow-hidden h-2"
        style={{ flexGrow: 1 }}
      >
        <span class="sr-only">Foo</span>
      </button>
      <button
        className="bg-blue-100 overflow-hidden h-2"
        style={{ flexGrow: 2 }}
      >
        <span class="sr-only">Foo</span>
      </button>
      <button
        className="bg-blue-100 overflow-hidden h-2"
        style={{ flexGrow: 3 }}
      >
        <span class="sr-only">Foo</span>
      </button>
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
