export const name="hematology-fill";
export const id="dl_a2a63adb0dba9a5c3184";
export const url=new URL("../icons/hematology-fill.svg?v=3a2d0935c47f5c5ff2a6962973848e99281ba26baa536232e83df8e1c1fbc822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
