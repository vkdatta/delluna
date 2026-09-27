export const name="format_image_front-fill";
export const id="dl_96a2e3dada716e315b12";
export const url=new URL("../icons/format_image_front-fill.svg?v=2447d402960cdf7759fa2246fdc341be641a7e2ccbaa72228d2b234e5bf59738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
