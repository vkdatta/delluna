export const name="border_inner-fill";
export const id="dl_29d948203e96d90317ea";
export const url=new URL("../icons/border_inner-fill.svg?v=ba7e39ccb1104fb3bbcff84899b9b1634b2550bc9a26bc9bc2c702ffde81b3eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
