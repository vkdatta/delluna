export const name="tote-thin";
export const id="dl_956f2193f311435c6a8d";
export const url=new URL("../icons/tote-thin.svg?v=5cf9020d234b3c93ab9746fa28df4ae4358ee4f9b52f39ec3dad25854423cceb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
