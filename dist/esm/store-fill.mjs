export const name="store-fill";
export const id="dl_adcc6829af8b48cfbab1";
export const url=new URL("../icons/S/store-fill.svg?v=6bac9afb17a1c4225274696bfdd6a519316bd086dd9a125d0885981c97933a13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
