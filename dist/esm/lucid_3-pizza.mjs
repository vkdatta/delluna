export const name="lucid_3-pizza";
export const id="dl_ccafa7455d214b9f9609";
export const url=new URL("../icons/lucid_3-pizza.svg?v=2c64a7c59d8df6190cbae36e3b559b7961960dcff3348784ca05ef1f4fd09d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
