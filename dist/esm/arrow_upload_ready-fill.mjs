export const name="arrow_upload_ready-fill";
export const id="dl_89dff6c9cbd657052681";
export const url=new URL("../icons/arrow_upload_ready-fill.svg?v=e436fa4c6094793b2bbdda528c08618ec67edcd8a9b8853e0db88242e0fc1ac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
