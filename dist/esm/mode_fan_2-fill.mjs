export const name="mode_fan_2-fill";
export const id="dl_ad8515fd6f9428bcf349";
export const url=new URL("../icons/mode_fan_2-fill.svg?v=9d89eaa751a774fc59abdcfb14fa55c7693c8882a911d52db58265d1cff6299e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
