export const name="shoe_cleats-fill";
export const id="dl_85718d0fd009442dd0f1";
export const url=new URL("../icons/shoe_cleats-fill.svg?v=fd7f3db000072b2749a9e388f31da45cd203fcaa09185eadd4b4a3d832966589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
