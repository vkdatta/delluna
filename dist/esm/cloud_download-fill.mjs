export const name="cloud_download-fill";
export const id="dl_a39a3549da8049a39737";
export const url=new URL("../icons/cloud_download-fill.svg?v=b94b0a95b3c6fa46f7988e59f1d5df69a204ef0f9a05c6bc3dd5584277c7feba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
