export const name="lucid_2-mail-minus";
export const id="dl_e3711150aefd4d59b6ea";
export const url=new URL("../icons/lucid_2-mail-minus.svg?v=ca6bdcbf4c9a7f72f1ce03ed1f3e589f8ad08fcceb8b6493f184bc80ea6a8a48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
