export const messageObject2 = { message: "hello from simple dependency" };

export function getMessage2() {
  return { ...messageObject2, extraProp: "retrieved from a function" };
}
