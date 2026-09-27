export const name="tray-fill";
export const id="dl_e2ba8bf8fc894dd9667e";
export const url=new URL("../icons/tray-fill.svg?v=380b38a2ab3bb0bc88e6406e56f30fb3715955cbe276f3cd27a61c875436b830",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
