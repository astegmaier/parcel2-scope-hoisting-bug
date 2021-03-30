export const messageObject = { message: "hello from simple dependency" };

export function getMessage() {
  return { ...messageObject, extraProp: "retrieved from a function" };
}
