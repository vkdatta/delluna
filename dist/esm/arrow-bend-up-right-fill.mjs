export const name="arrow-bend-up-right-fill";
export const id="dl_12aa7532689f44e3aafb";
export const url=new URL("../icons/arrow-bend-up-right-fill.svg?v=69b6138ea3c0bfcba903a442c1a6e0e0aaf16eac53b508a8d49918cbe5629406",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
