export const name="beer-stein-bold";
export const id="dl_4ffc7ca1266046c2a722";
export const url=new URL("../icons/beer-stein-bold.svg?v=9783823675f957c8216daefdea084f10c33b159377cc3e6c992a64f5a778a4fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
