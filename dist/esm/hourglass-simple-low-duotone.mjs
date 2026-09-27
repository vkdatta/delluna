export const name="hourglass-simple-low-duotone";
export const id="dl_30a831ba84fb4da09ecc";
export const url=new URL("../icons/hourglass-simple-low-duotone.svg?v=cf0b3532f28d23db5d12078b581ad7b27ea8f3a65e67c6e521bb9b79083e83eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
