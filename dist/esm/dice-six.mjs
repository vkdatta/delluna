export const name="dice-six";
export const id="dl_4c1ba088b27a49b9abf0";
export const url=new URL("../icons/dice-six.svg?v=662eeacdbea51c681b36b692002bd7463803f0ed632832e8efdfe3741dcbb653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
