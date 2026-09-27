export const name="stylus_fountain_pen-fill";
export const id="dl_ab50496b6ea6c8ae5ac7";
export const url=new URL("../icons/stylus_fountain_pen-fill.svg?v=da17b1d4ad742f21691132bb090357b5b99fd2c458f1965ac628ef9ee13b7fe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
