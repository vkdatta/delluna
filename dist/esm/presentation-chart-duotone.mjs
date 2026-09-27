export const name="presentation-chart-duotone";
export const id="dl_3a1bce5ab88c4f72b998";
export const url=new URL("../icons/presentation-chart-duotone.svg?v=d1baf90c3502365d7e29f81625b67777df4a3ac2b01f73b542262a2bd1d06b25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
