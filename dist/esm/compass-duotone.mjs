export const name="compass-duotone";
export const id="dl_d110075939f24b5e9775";
export const url=new URL("../icons/compass-duotone.svg?v=98910cdf8196c47780e12c02683a12f09685c3c5d976dcd3d68edc4a2b330d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
