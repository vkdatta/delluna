export const name="spinner-gap-fill";
export const id="dl_9a1dd885a9144700a2d4";
export const url=new URL("../icons/S/spinner-gap-fill.svg?v=6b13c6fe3926cfddf637e50ee92bc1d592369ee1d16e9e8b18e81fa3bc1ffbe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
