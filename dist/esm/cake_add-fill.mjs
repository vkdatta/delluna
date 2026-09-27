export const name="cake_add-fill";
export const id="dl_23f6081c56a60e3000f7";
export const url=new URL("../icons/cake_add-fill.svg?v=e996a02a77fa7a036f3a33ec7b75479ce7445106d7082622804d8cfa612593b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
