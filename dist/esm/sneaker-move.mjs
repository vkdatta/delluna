export const name="sneaker-move";
export const id="dl_ab0e41d08256c7a10433";
export const url=new URL("../icons/sneaker-move.svg?v=5e3a1d2cfa3ed82b0fc2af410ce98dcff55738916ed57f36437d68b4f85ae43a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
