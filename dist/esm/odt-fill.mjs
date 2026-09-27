export const name="odt-fill";
export const id="dl_e960260666c0f09577b3";
export const url=new URL("../icons/odt-fill.svg?v=2b86f997cc8b2d74ed09731655839ed83544be3aad7ccc9254eaeab6e60f7585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
