export const name="switch_access_shortcut-fill";
export const id="dl_8c391061feb744fb9dea";
export const url=new URL("../icons/switch_access_shortcut-fill.svg?v=6c460b8a60e1bed3c2e13901ab0e613c389b3da576ab0f258aa3c4377673676d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
