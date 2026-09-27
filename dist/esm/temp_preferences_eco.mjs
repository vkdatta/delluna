export const name="temp_preferences_eco";
export const id="dl_8250e93dd593394ab049";
export const url=new URL("../icons/temp_preferences_eco.svg?v=56622044dca9aae98ebdf01689fefd1b1cce5552a9a4706bea124926b6c6689f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
