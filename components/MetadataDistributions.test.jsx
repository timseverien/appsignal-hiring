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

  it("renders headings for each metadata distribution attributes", () => {
    build();

    expect(screen.getByText("hostname (10)")).toBeInTheDocument();
    expect(screen.getByText("revision (20)")).toBeInTheDocument();
  });

  it("renders a bar with distribution items", () => {
    build({
      distributions: [
        {
          name: "hostname",
          total: 200,
          unique: 10,
          distributions: [
            {
              key: "distribution1",
              value: 20,
            },
            {
              key: "distribution2",
              value: 20,
            },
          ],
        },
      ],
    });

    expect(screen.getByText("distribution1")).toBeInTheDocument();
    expect(screen.getByText("distribution1")).toBeInTheDocument();
  });

  it("renders a bar with 'other' distribution item when number of item exceeds 10", () => {
    build({
      distributions: [
        {
          name: "hostname",
          total: 220,
          unique: 11,
          distributions: [
            {
              key: "distribution1",
              value: 20,
            },
            {
              key: "distribution2",
              value: 20,
            },
            {
              key: "distribution3",
              value: 20,
            },
            {
              key: "distribution4",
              value: 20,
            },
            {
              key: "distribution5",
              value: 20,
            },
            {
              key: "distribution6",
              value: 20,
            },
            {
              key: "distribution7",
              value: 20,
            },
            {
              key: "distribution8",
              value: 20,
            },
            {
              key: "distribution9",
              value: 20,
            },
            {
              key: "distribution10",
              value: 20,
            },
            {
              key: "distribution11",
              value: 20,
            },
          ],
        },
      ],
    });

    expect(screen.getByText("distribution9")).toBeInTheDocument();
    expect(screen.getByText("other")).toBeInTheDocument();
  });
});
