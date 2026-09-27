export const name="eraser_size_2-fill";
export const id="dl_1fe56c7a11d36f919b07";
export const url=new URL("../icons/eraser_size_2-fill.svg?v=ad5892be8b604e7f57b47ed5a1f9b21986db881df2400f4f061541c5fd3a559b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
