export const name="users-duotone";
export const id="dl_fbcac2ac3f1a19e6b2f6";
export const url=new URL("../icons/users-duotone.svg?v=4f039fa3a873de506ce747b9baa8f5fc090951aa974d46a8e2d3df866b985f8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
