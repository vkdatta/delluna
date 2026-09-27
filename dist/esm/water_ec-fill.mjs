export const name="water_ec-fill";
export const id="dl_9dd6d5ea47ed895146b8";
export const url=new URL("../icons/water_ec-fill.svg?v=aca9e5d2de5c0bc9675061e3dc60ac21990623973a827f1c1222548b58bde5d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
