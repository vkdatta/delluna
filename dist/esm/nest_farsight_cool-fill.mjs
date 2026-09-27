export const name="nest_farsight_cool-fill";
export const id="dl_ba449a51b1054de91a92";
export const url=new URL("../icons/nest_farsight_cool-fill.svg?v=b1d4e64c451e5e896afcbaabcd443f60aca7a8fb4fbf88079fc62a7522d5177f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
