export const name="fish";
export const id="dl_5eb4f657729642dca218";
export const url=new URL("../../icons/F/fish.svg?v=17b04ffebcab4d083fc555bfb0c5a86efaf8868f84ff585b27a1aa1716f8ec51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
