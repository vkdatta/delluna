export const name="selection-all";
export const id="dl_5f5621cead7822a72cd2";
export const url=new URL("../icons/selection-all.svg?v=a11cad61c914b1edd400208744b94de359cb460e15f35ee45db554907a4f516a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
