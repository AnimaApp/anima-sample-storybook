import React from "react";
import { Button, Paper, Text, Group, CloseButton } from "@mantine/core";

const CookiesBanner = () => {
  return (
    <Paper withBorder p="lg" radius="md" shadow="md">
      <Group position="apart" mb="xs">
        <Text size="md" weight={500}>
          Allow cookies
        </Text>
        <CloseButton mr={-9} mt={-9} />
      </Group>
      <Text color="dimmed" size="xs">
        So the deal is, we want to spy on you. We would like to know what did
        you have for todays breakfast, where do you live, how much do you earn
        and like 50 other things. To view our landing page you will have to
        accept all cookies. That&apos;s all, and remember that we are
        watching...
      </Text>

      <Group position="right" mt="xs">
        <Button variant="default" size="xs">
          Settings
        </Button>
        <Button variant="outline" size="xs">
          Accept
        </Button>
      </Group>
    </Paper>
  );
};

export default {
  title: "Mantine/CookiesBanner",
  component: CookiesBanner,
};

const Template = (args) => <CookiesBanner {...args} />;
export const MantineCookiesBanner = Template.bind({});
MantineCookiesBanner.args = {};
