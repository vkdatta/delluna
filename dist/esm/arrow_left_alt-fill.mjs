export const name="arrow_left_alt-fill";
export const id="dl_af8885d916ef7a9ed56e";
export const url=new URL("../icons/arrow_left_alt-fill.svg?v=0d34c290e8c0ea1e7e2f8c4fe6e22bea044941897a40b1b1c8a8c0bef775b205",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
