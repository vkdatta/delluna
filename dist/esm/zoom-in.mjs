export const name="zoom-in";
export const id="dl_614dc6b10a5549b6b705";
export const url=new URL("../icons/zoom-in.svg?v=033f13c48b8a9a0fa945ca039caf4ede5a0959626e422b02e95b93efb7f81000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
