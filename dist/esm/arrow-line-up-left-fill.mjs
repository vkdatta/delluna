export const name="arrow-line-up-left-fill";
export const id="dl_30e4c7ace49843f0a927";
export const url=new URL("../icons/arrow-line-up-left-fill.svg?v=f2bdf8d68918142d094a65879b9d8724ccc1daed7cd64628115f3b2d04767050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
