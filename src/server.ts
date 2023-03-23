export type Node = {
    uri: string;
    user: string;
};

const servers: Node[] = [];

export const getNodes = () => {
    return [...servers]
}

export const addNode = (node: Node) => {
    console.log(`registering ${node.uri}`);

    // @ts-ignore
    const isAlreadyAdded = server.find((existingNode) => existingNode.user === node.user);

    if (isAlreadyAdded) {
        servers.push(node);
    }
}

export const getNodesByUser = (user: string) => {
    return servers.filter((server) => server.user === user);
}
