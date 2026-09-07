export const name="monitor-play-duotone";
export const id="dl_051459892c3642fd9f34";
export const url=new URL("../icons/monitor-play-duotone.svg?v=fd9137e2b861a0e0037d6e0a6134f7983b78b3afb6aeb94ad07d04362abb5f79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
