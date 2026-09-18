export const name="crop_square-fill";
export const id="dl_8325d6a947484644b757";
export const url=new URL("../icons/crop_square-fill.svg?v=b3a12fda15acd6073399430583152664b82b25411fe2fecc3b147016d8d415a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
