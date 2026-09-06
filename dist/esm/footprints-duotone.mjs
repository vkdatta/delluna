export const name="footprints-duotone";
export const id="dl_fa5eb98ebe0441a891b0";
export const url=new URL("../icons/footprints-duotone.svg?v=9f08d97c10be4e87800a2fcea6e6891428af83cd2c35f24149291c7e5bc56711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
