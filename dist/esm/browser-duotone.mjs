export const name="browser-duotone";
export const id="dl_afce4a3d89314cacb9ae";
export const url=new URL("../icons/browser-duotone.svg?v=3ef00b237bc4bb131274b22bc341de0fdd332cd966a00c1ee9f588d7418221f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
