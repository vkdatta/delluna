export const name="shield-star-fill";
export const id="dl_0a592b34fe174975ac6d";
export const url=new URL("../icons/S/shield-star-fill.svg?v=7e9fe5c6cb41b96072ec843e0d40d236c6465224aff693c4828be252dede6afd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
