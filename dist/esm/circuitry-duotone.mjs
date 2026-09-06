export const name="circuitry-duotone";
export const id="dl_4cb49a444b4a47c7972e";
export const url=new URL("../icons/circuitry-duotone.svg?v=7d071183a0df4c5fc2053d0bb5d70ecb68f1f394b5ec8baa384c54146ee9f499",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
