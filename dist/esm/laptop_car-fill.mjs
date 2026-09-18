export const name="laptop_car-fill";
export const id="dl_967769b269154989ae65";
export const url=new URL("../icons/laptop_car-fill.svg?v=f50add244cd8ef9e1db40d91d5c9272cd16699594dfaa7c9da8ec35a0677e240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
