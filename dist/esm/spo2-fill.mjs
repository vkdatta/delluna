export const name="spo2-fill";
export const id="dl_3624d2c58b0cafe44aef";
export const url=new URL("../icons/spo2-fill.svg?v=1c43788ee5b999b6de12968ab15ecf9e195b5da3657d1df57a5a687c58ca00d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
