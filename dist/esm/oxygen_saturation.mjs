export const name="oxygen_saturation";
export const id="dl_10b72669b8166d5e03c5";
export const url=new URL("../icons/oxygen_saturation.svg?v=d59cc68d57e0f35f7e92c8db9a349931be4d9fa37b249b72c10224b1ea0c2913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
