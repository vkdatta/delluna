export const name="stylus_brush-fill";
export const id="dl_3694bfef6a29e032686d";
export const url=new URL("../icons/stylus_brush-fill.svg?v=af768a469c1db808f57db513c1dd15a8a93d8412499cf37f11fd9632f0932723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
