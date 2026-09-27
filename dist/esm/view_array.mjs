export const name="view_array";
export const id="dl_082411d19e4112798ae2";
export const url=new URL("../icons/view_array.svg?v=5672beebbafd7bb57f96a06721ce7b1564adcb24d98c9d1666cde07ca1cbcd83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
