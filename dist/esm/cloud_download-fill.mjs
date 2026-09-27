export const name="cloud_download-fill";
export const id="dl_08675b50329868c3a71d";
export const url=new URL("../icons/cloud_download-fill.svg?v=f2a3076415cf4e4a4afa529f0b215d25c4279efa1fa758187d81081787adec8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
