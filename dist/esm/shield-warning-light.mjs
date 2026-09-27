export const name="shield-warning-light";
export const id="dl_444de9c2dd95bcf0f4db";
export const url=new URL("../icons/shield-warning-light.svg?v=19977a90a555ff4f6428fbe8ecb87bda32daaf329c1512c1991cd51f186e4536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
