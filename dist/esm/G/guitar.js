export const name="guitar";
export const id="dl_de2ad63c1bfc4303849c";
export const url=new URL("../../icons/G/guitar.svg?v=d6e48337f02617efe65f407054ce0e7d842c6df1e2ed976cfdbbf0c17cd94c9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
