export const name="solar-panel-fill";
export const id="dl_f3a446837ee30a6bc378";
export const url=new URL("../icons/solar-panel-fill.svg?v=f47cf00d8bb8649b2b0be3f0ca6b94d7fbc53684c12124e35d2b308a2561ef14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
