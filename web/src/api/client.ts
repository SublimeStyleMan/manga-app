import { createClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import { Greeter } from "../gen/greet_pb";

// The transport is the "how": it sends requests to the server's gRPC-Web port.
const transport = createGrpcWebTransport({ baseUrl: "http://localhost:8080" });

// The typed client is the "what": methods generated from greet.proto.
export const greeterClient = createClient(Greeter, transport);
