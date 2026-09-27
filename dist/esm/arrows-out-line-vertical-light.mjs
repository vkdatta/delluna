export const name="arrows-out-line-vertical-light";
export const id="dl_cf75f7d6b66f4a249b3c";
export const url=new URL("../icons/arrows-out-line-vertical-light.svg?v=3f555176a9905f8b0cdc6830d47e9c03a9ce66b7f4b6937919bf6aef2cccbbf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
