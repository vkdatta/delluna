export const name="nest_farsight_dual";
export const id="dl_edd716ae5dcf3da72b77";
export const url=new URL("../icons/nest_farsight_dual.svg?v=da4b99d6c0269867378a2e7ac628a953906f1d48045cdbd6ab3f92575403c082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
