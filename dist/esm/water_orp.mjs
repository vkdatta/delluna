export const name="water_orp";
export const id="dl_24dc6eac73bc075cecb6";
export const url=new URL("../icons/water_orp.svg?v=13cf5f91132a4d833a6366b41cbeb782a1a3ddb7f68fe2b8457deed0e3dfdffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
