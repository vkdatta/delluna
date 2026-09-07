export const name="building-apartment-fill";
export const id="dl_4ce899de552f48c89c20";
export const url=new URL("../icons/building-apartment-fill.svg?v=f79f9ada790c48b35913e93c1c2663ea742ec1c769f241fb1829b6e352fc8915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
