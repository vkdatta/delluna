export const name="foot_bones-fill";
export const id="dl_9064e120a6294432b7a4";
export const url=new URL("../icons/F/foot_bones-fill.svg?v=ea967a185185919ff8b7f4794a5c743782b1833331a29e0ec85c36f6b01f3a5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
