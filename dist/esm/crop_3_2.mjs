export const name="crop_3_2";
export const id="dl_f6d96468532eb65a1dec";
export const url=new URL("../icons/crop_3_2.svg?v=35dfcabfee5b15868faac5986b0cadb14a5d01a973f49dd83c41f56f99bfafda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
