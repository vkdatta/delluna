export const name="7k_plus-fill";
export const id="dl_5cbe5df53bb39bcb6fb7";
export const url=new URL("../icons/7k_plus-fill.svg?v=66c8420f72c829e5b97dc019cc44c5a4bdb98b44e5445642795a0e450d104f79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
