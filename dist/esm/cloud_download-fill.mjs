export const name="cloud_download-fill";
export const id="dl_d83ee18c8f21d9a8af48";
export const url=new URL("../icons/cloud_download-fill.svg?v=4283aec828293f4093a0762d06aba0e1ead8c99c4ec800ac2f06ce4d3d163ea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
