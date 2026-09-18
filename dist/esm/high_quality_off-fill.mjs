export const name="high_quality_off-fill";
export const id="dl_dfe7fdc88ed04f84b0e0";
export const url=new URL("../icons/H/high_quality_off-fill.svg?v=1a5160dc898b44b5c4ed86259dc545298282b7c377f6a7304816610101f32ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
