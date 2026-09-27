export const name="local_laundry_service-fill";
export const id="dl_88be980001b8fb689319";
export const url=new URL("../icons/local_laundry_service-fill.svg?v=3e3664390f3ba9b7fd29f0cc17f3032c26741e7266277796284c93a66bf5731f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
