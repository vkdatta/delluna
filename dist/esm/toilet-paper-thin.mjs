export const name="toilet-paper-thin";
export const id="dl_5c0b5d8c2390a704be6b";
export const url=new URL("../icons/toilet-paper-thin.svg?v=1b7e0d5872be04b7db3175a3248485c496b0d4bc3ca4329830bdd1558c571d4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
