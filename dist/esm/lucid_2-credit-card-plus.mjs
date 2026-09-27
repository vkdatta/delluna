export const name="lucid_2-credit-card-plus";
export const id="dl_5422a69129ff47f0a937";
export const url=new URL("../icons/lucid_2-credit-card-plus.svg?v=e363170c866181ea6b4ed583e28f0e859d41ca6c837d94014d9b3eab798ab49c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
