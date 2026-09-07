export const name="sketch-logo-fill";
export const id="dl_355e2372918f42169144";
export const url=new URL("../icons/S/sketch-logo-fill.svg?v=ebc61cefe34be7a65c23c6b34b0f4f7e77a206ddd334eae42109a0fe8e953a7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
