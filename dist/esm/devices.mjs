export const name="devices";
export const id="dl_6cf085bc764f4bb08e05";
export const url=new URL("../icons/devices.svg?v=cf7adf8f8a37220cf8b88fdb437e58945a3b15f87b0a9ce594fe21fd136bb16c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
