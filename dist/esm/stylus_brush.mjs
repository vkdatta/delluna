export const name="stylus_brush";
export const id="dl_b7f060cb9e1bc14d9cb4";
export const url=new URL("../icons/stylus_brush.svg?v=8ee010de0c0f4b69d8985e3779662c6c74d5e78b8b5d368a0306b292433bb12d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
