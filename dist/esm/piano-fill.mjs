export const name="piano-fill";
export const id="dl_d1c31714cee5a7a4e89c";
export const url=new URL("../icons/piano-fill.svg?v=39af86010b01bd85654760c694c9e6cdc8f6c1839c4dd2d2bc1572ae4f89bf0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
