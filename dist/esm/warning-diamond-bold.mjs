export const name="warning-diamond-bold";
export const id="dl_f90dee0e3071447a9282";
export const url=new URL("../icons/W/warning-diamond-bold.svg?v=9649aabd0ea52776745720b8a5ceacb767e428f0c5307b06b6a3ec5407449e71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
