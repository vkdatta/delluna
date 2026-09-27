export const name="lucid_3-moon";
export const id="dl_ce6f4f2ede144bd9a5d0";
export const url=new URL("../icons/lucid_3-moon.svg?v=dbbd06dc062fe9d0a626f15971221e39688dde1d65154b21b1992d483fb68e6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
