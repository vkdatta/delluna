export const name="lucid_3-pizza";
export const id="dl_ccafa7455d214b9f9609";
export const url=new URL("../icons/lucid_3-pizza.svg?v=bf3e34d51053ae05599ae73697ddc685ada073700d8ab174a5e507cf6df8fbdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
