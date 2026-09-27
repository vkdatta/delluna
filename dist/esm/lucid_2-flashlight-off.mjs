export const name="lucid_2-flashlight-off";
export const id="dl_780c3a89999f4161b138";
export const url=new URL("../icons/lucid_2-flashlight-off.svg?v=2088352e9b788624d1540aef739cccf01b2fcf5bbb5ac16523e06840f962f48b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
