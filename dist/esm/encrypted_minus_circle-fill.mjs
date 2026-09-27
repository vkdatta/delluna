export const name="encrypted_minus_circle-fill";
export const id="dl_a892bbda1c402a427de3";
export const url=new URL("../icons/encrypted_minus_circle-fill.svg?v=f66080cc4c1bd2937bfef943c04dad548afc5af03597cc878ca195c8fd458215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
