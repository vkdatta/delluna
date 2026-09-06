export const name="microscope-light";
export const id="dl_3905478294e64209bd55";
export const url=new URL("../icons/microscope-light.svg?v=3aac89a149dd49ef84dc85e79acb17bf710588ec370ba2e8c48053bfc21449e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
