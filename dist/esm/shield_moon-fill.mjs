export const name="shield_moon-fill";
export const id="dl_df9e4d462daf442dab5e";
export const url=new URL("../icons/shield_moon-fill.svg?v=bb480c11bc68c097d07bca243bd40ba272af343eb7480550fff72e39ee26285e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
