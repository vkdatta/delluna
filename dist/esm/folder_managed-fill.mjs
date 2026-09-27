export const name="folder_managed-fill";
export const id="dl_9ea6bcbff02ec49c8651";
export const url=new URL("../icons/folder_managed-fill.svg?v=96a97a7dfec17ba63f6411d30e9038aa424b9691f5dfef8715163e0a2770e0b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
