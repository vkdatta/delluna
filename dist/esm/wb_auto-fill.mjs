export const name="wb_auto-fill";
export const id="dl_450d4e7b9e1a42a2bf9c";
export const url=new URL("../icons/wb_auto-fill.svg?v=c812acecbf16a3f5bcb4bcae81a548c288f2de75e729481390242b9bed4b93c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
