export const name="orders";
export const id="dl_c78fbb55d24d297337aa";
export const url=new URL("../icons/orders.svg?v=9ab538362427f83594c188bcfbb7c2005a7b9bd2cccfa6d3e5a834d1191544e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
