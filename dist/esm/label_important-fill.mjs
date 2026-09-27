export const name="label_important-fill";
export const id="dl_5c99ecec3f1ccd9a2bd8";
export const url=new URL("../icons/label_important-fill.svg?v=e82d61485d5698f166095019762ac54ab3f5cd5b17a806d9f305606f44357386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
