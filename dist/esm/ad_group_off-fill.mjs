export const name="ad_group_off-fill";
export const id="dl_e56bf5908d3a6601c3c9";
export const url=new URL("../icons/ad_group_off-fill.svg?v=a0c1fb9d2bebad4b72681c0ef6815fbf314a34cd17df9d5ea0551eda2dbdc559",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
