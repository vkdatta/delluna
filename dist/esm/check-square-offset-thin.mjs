export const name="check-square-offset-thin";
export const id="dl_4a09848e24014bd5be72";
export const url=new URL("../icons/check-square-offset-thin.svg?v=35b8aa7a9206e8ca6a7200652c13de61b20935ba3e31df0f58dc3c5eafe05c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
