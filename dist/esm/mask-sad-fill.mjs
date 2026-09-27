export const name="mask-sad-fill";
export const id="dl_9687797b8a1346efa1a8";
export const url=new URL("../icons/mask-sad-fill.svg?v=d02a768f22427242c080fc88785a0ceef2087222a6b2d38754e8966d96f9536a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
