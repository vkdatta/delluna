export const name="youtube-logo-fill";
export const id="dl_d30580d170d08fae345c";
export const url=new URL("../icons/youtube-logo-fill.svg?v=435a8a3caecdc2f78e1eb1cdd8f09edbde128f65cd9656ed28049cb2141a043f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
