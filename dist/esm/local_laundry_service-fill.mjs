export const name="local_laundry_service-fill";
export const id="dl_98bf59963f691870c618";
export const url=new URL("../icons/local_laundry_service-fill.svg?v=784769c65487d533cc2ff942ec9bce9ad60b399694d693b0f0d02044e0c45597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
