export const name="office-chair";
export const id="dl_9bbbd9b3119b4e74ba96";
export const url=new URL("../icons/office-chair.svg?v=1b48fa390e3302be45053e4c010c65701f5e0256ade842719ac72a3a7f3aaf2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
