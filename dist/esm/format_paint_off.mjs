export const name="format_paint_off";
export const id="dl_7994546184f36f6f9f85";
export const url=new URL("../icons/format_paint_off.svg?v=f70bbfc27fc1dfad2fcd6f2accd4e937dff9ba641a5107bd82864d2923fd3f82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
