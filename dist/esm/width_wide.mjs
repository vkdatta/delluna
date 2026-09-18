export const name="width_wide";
export const id="dl_268ce8e745ec4bca8993";
export const url=new URL("../icons/W/width_wide.svg?v=0d6227b13ad06e7e815c438eb12beb6060cd2c0159443e63f3118731775ae67b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
