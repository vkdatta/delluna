export const name="circuitry";
export const id="dl_84f5fb9dfd9b44b790b1";
export const url=new URL("../icons/circuitry.svg?v=1ba3183421cd492f6832beb63b84b7f11303be116add54dbf6730f23d61d39d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
