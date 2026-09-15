export const name="directions_walk-fill";
export const id="dl_0c9a5b4f33dd4248a291";
export const url=new URL("../icons/D/directions_walk-fill.svg?v=dd7dc6d80b138300c8ed75066d0c741685f27918c59009cef6809fb82bcc6d97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
