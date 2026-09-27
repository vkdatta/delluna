export const name="peace-duotone";
export const id="dl_420a4261a58a4571a890";
export const url=new URL("../icons/peace-duotone.svg?v=01e7c8f4c06125f2d8ec806efd9e2442a0732caec21095b12443c3355b518b61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
