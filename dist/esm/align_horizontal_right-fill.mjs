export const name="align_horizontal_right-fill";
export const id="dl_2dd9cb63e82e44398115";
export const url=new URL("../icons/align_horizontal_right-fill.svg?v=66f41028f3eb7efc8de36bc27f321f299c25adf41bb65605f751f33099379b55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
