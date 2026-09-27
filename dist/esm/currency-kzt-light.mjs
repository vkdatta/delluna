export const name="currency-kzt-light";
export const id="dl_22663aa979a74a1281f4";
export const url=new URL("../icons/currency-kzt-light.svg?v=2250602ef84a369ac88da8619469e5c9e3585dad05be54260c1dfe91377ab9d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
