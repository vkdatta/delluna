export const name="unplug";
export const id="dl_9810c88caab34c00ab3a";
export const url=new URL("../icons/unplug.svg?v=47c83cedca71911f33f1a8f97657f79403f0f5de843f243a93190349402ba8dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
