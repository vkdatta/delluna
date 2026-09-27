export const name="file-ppt-fill";
export const id="dl_783cbcf32d5240bca415";
export const url=new URL("../icons/file-ppt-fill.svg?v=2578524ef3e0b19a73c237000a9c44fd518be0e4f2e00739c6d76c1d5954e9c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
