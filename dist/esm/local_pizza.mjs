export const name="local_pizza";
export const id="dl_37b921cfd81a1581b558";
export const url=new URL("../icons/local_pizza.svg?v=33a88e51dc95f07a7973ebd83642b1da100cfbb304a461d183585ac33f671d9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
