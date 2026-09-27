export const name="file_png-fill";
export const id="dl_355a05b8c861f418f41b";
export const url=new URL("../icons/file_png-fill.svg?v=42f659c97ce69271c0fc5818d18492157bd68c4a0c98537bcf4772a7a0a016d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
