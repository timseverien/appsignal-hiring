import { render, screen } from "@testing-library/react";
import MetadataDistributions from "./MetadataDistributions";
import dataFromGraphql from "@/data/graphql";

describe("MetadataDistributions", () => {
  const build = (props) => {
    const { app: distributions } = dataFromGraphql;
    return render(
      <MetadataDistributions
        distributions={distributions.metadataDistributions}
        {...props}
      />
    );
  };

  it("renders a metadata distributions box", () => {
    build();

    expect(screen.getByText("Metadata distributions")).toBeInTheDocument();
  });

  it("renders a metadata distribution category", () => {
    build();

    expect(screen.getByText("hostname (10)")).toBeInTheDocument();
  });
});
