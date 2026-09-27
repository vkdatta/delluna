export const name="file-cloud-fill";
export const id="dl_5b0a4b98afe64ceeb5fd";
export const url=new URL("../icons/file-cloud-fill.svg?v=381f58046636dddbf5d1c3a3aa05b8b682f7ee47c3bdf9214668a81517a261b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
