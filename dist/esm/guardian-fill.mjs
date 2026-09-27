export const name="guardian-fill";
export const id="dl_4609f029b62ad03790cb";
export const url=new URL("../icons/guardian-fill.svg?v=bb8c27c4fac06da2eb9f1d3921185266cc498091587ee54455498bf47a2d7a40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
