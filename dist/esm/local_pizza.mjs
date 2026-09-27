export const name="local_pizza";
export const id="dl_90058df23ab94d99d0b3";
export const url=new URL("../icons/local_pizza.svg?v=82c2b4905ace7967197877d2be90e887ab7034afe5b761df71db6e29ca4bb55c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
