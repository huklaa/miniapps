export function isMessageDataOfType(
  data: unknown,
  type: string,
): data is Record<string, unknown> & { type: string } {
  return (
    typeof data === 'object' &&
    data !== null &&
    'type' in data &&
    data.type === type
  )
}
