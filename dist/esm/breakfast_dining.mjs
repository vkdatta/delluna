export const name="breakfast_dining";
export const id="dl_8fcf80dce75aa7e51d43";
export const url=new URL("../icons/breakfast_dining.svg?v=d88e2cf29516ac62f918e157af54dc18b84f8a79c73fc14d514240b96a7e6efd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
