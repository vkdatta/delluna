export const name="paper-plane-fill";
export const id="dl_acd87fd173964c3c931b";
export const url=new URL("../icons/paper-plane-fill.svg?v=8a919b41d95b728e336cbce9b8dbb1b29ae6698a945b8d1545005361264271cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
