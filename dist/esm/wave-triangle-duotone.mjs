export const name="wave-triangle-duotone";
export const id="dl_1836f40324e60196e1cd";
export const url=new URL("../icons/wave-triangle-duotone.svg?v=c55a179e75c4e7ba37941057638c20c68e5f53dd468744370e42facdfa519656",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
