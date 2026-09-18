export const name="guardian-fill";
export const id="dl_2c514522806b4a6a8752";
export const url=new URL("../icons/G/guardian-fill.svg?v=bb8c27c4fac06da2eb9f1d3921185266cc498091587ee54455498bf47a2d7a40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
