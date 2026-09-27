export const name="humidity_high-fill";
export const id="dl_ed7a8663d8c12f6b0094";
export const url=new URL("../icons/humidity_high-fill.svg?v=dce2fe91a0e21bdba54faa5976f2c5ae03bb71f60119dcb5f1a89bad996102e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
