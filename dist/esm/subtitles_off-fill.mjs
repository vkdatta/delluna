export const name="subtitles_off-fill";
export const id="dl_2d78da98c496e3bdc7a7";
export const url=new URL("../icons/subtitles_off-fill.svg?v=278c83dd9a85245b843ae13ee241d1e8149ead67d3328d38eb296bf2edf479c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
