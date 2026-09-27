export const name="cake_add";
export const id="dl_1cfa31654a75a34cad12";
export const url=new URL("../icons/cake_add.svg?v=f1f3e32ccef6ad792907465719e20e9a2d79e1ef62b19f7f38127169b0338a88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
