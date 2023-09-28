import Card from "@/components/Card";
import Tooltip from "@/components/Tooltip";

export default function MetadataDistributions({ distributions }) {
  return (
    <Card>
      <Tooltip content="I'm a tooltip">
        <h2>Metadata distributions</h2>
      </Tooltip>
    </Card>
  );
}
