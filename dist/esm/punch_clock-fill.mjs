export const name="punch_clock-fill";
export const id="dl_0370d1c3207ee950b239";
export const url=new URL("../icons/punch_clock-fill.svg?v=70cc32de1c87c4d9b7375196453d772ece66a7889d0495f2110009e89706ee91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
