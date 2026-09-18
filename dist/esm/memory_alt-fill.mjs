export const name="memory_alt-fill";
export const id="dl_d1cb3b97062a4f8abe58";
export const url=new URL("../icons/M/memory_alt-fill.svg?v=d8e1d7e65bf4a3f0b1737dcc16667e119aebd89ed9d0a3c09928912512e2dc9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
