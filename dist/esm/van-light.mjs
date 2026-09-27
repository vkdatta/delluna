export const name="van-light";
export const id="dl_ba65e65b51b4ade35bbc";
export const url=new URL("../icons/van-light.svg?v=2dc2624ebca5e9ce6dace43f4bd37d34510bc0a81cca971a6e9aa7845a87ffff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
