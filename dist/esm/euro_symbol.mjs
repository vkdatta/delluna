export const name="euro_symbol";
export const id="dl_4b0cee68406f90f766b8";
export const url=new URL("../icons/euro_symbol.svg?v=476922e0e2fffd7cb9bc1c6f7f434529dec0535439969855bd069753afaf3d4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
