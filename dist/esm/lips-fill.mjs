export const name="lips-fill";
export const id="dl_d639e24636850896a3b7";
export const url=new URL("../icons/lips-fill.svg?v=4973246369262c2ae9b56453c47a14e21377330a9b0bbbc83a373cb44688c872",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
