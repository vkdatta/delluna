export const name="star-plus";
export const id="dl_d21bef4e51264bd99d8f";
export const url=new URL("../icons/star-plus.svg?v=ce9f12cc773b78ecce3479eeaaecf547617523f24ef3bb74d3b0ffcc40c26586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
