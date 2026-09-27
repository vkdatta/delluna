export const name="stylus_brush-fill";
export const id="dl_361c573d1a5b3c6a6a21";
export const url=new URL("../icons/stylus_brush-fill.svg?v=825bb158e4d0fe4fe893d57a8b6547e0185fee732abcf96f10ea8e3255f3137f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
