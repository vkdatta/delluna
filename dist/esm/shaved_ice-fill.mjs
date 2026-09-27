export const name="shaved_ice-fill";
export const id="dl_07c37065e3b49358aca0";
export const url=new URL("../icons/shaved_ice-fill.svg?v=859b55391fba00643d05be1dbe6758b8968f50507a1bada326264c919ee6ff70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
