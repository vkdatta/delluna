export const name="cloud-rain-fill";
export const id="dl_c734f40641f24594852c";
export const url=new URL("../icons/cloud-rain-fill.svg?v=bb9cae3911419ec866cac15a2c2520ce30d8077a2b879ba228483cac22d7303e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
