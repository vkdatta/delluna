export const name="factory-duotone";
export const id="dl_718736363516437f96dc";
export const url=new URL("../icons/factory-duotone.svg?v=b1a8af6b3b3e60821ead62f92d3fdd337476a6aeafb0276bc799aa8debf5e809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
