export const name="camera-fill";
export const id="dl_797324c779da47ba998b";
export const url=new URL("../icons/camera-fill.svg?v=2e376f25fdd39c6f53cad6cc470d280962ee7003147d1552bd18c9d799dcf196",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
