export const name="apps-fill";
export const id="dl_326208c4e751346a5823";
export const url=new URL("../icons/apps-fill.svg?v=f1f149d401bb298708e4819a1b3e9a6c3b5c19718405b3d09fb78f5f3c142234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
