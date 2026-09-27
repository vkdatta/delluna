export const name="quick_reference_all-fill";
export const id="dl_1616de75767fed14072c";
export const url=new URL("../icons/quick_reference_all-fill.svg?v=3da16315052977ebfba841b80b905b36b290f3fa82db7ad3f8daa3b0d8c7dc56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
