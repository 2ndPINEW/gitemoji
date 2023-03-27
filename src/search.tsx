import { ActionPanel, Action, Grid } from "@raycast/api";
import { getGitMojis } from "./utils/io";

export default function Command() {
  const gitMojis = getGitMojis()

  return (
    <Grid columns={5} inset={Grid.Inset.Large} isLoading={false}>
      {gitMojis.map((gitMoji) => (
        <Grid.Item
          key={gitMoji.title}
          content={{ value: { source: gitMoji.emoji }, tooltip: gitMoji.description }}
          title={gitMoji.title}
          subtitle={gitMoji.description}
          keywords={gitMoji.keywords}
          actions={
            <ActionPanel>
              <Action.Paste content={gitMoji.emoji} />
            </ActionPanel>
          }
        />
      ))}
    </Grid>
  );
}
