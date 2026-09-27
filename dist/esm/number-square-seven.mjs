export const name="number-square-seven";
export const id="dl_f257ff2cab4e4fe99bb7";
export const url=new URL("../icons/number-square-seven.svg?v=b4f2653fe2ac9cd4cd93a21bb653dc6730438d5e40a3bb328741851c8541f626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
