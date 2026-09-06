export const name="file-arrow-up-fill";
export const id="dl_da69717040b046199843";
export const url=new URL("../icons/file-arrow-up-fill.svg?v=f16d385095e8365d2ea1c91324d7461f24ce3d2280fb422cd8148e343c4472d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
