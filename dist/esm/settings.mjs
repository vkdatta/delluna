export const name="settings";
export const id="dl_cc53255635bc0be73c50";
export const url=new URL("../icons/S/settings.svg?v=f3a6366b98528acfbd05ea67f4c0ee2e7d33c0fc278fdc885d5f95c431e3c2bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
