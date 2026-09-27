export const name="high_quality_off";
export const id="dl_5cc76e9dbbb8fef0ee0f";
export const url=new URL("../icons/high_quality_off.svg?v=6cb03897316169a06e79a0e8e92bb385bb327e804a796e49776e188373608550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
