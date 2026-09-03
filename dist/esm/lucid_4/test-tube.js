export const name="test-tube";
export const id="dl_a39de29cc89f4f3c955a";
export const url=new URL("../../icons/lucid_4/test-tube.svg?v=42be75204c169142dca289b8cb6f391225b21504d572580066b9470ed1552e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
