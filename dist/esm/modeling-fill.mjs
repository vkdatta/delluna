export const name="modeling-fill";
export const id="dl_a654f0e1ba44979bf37b";
export const url=new URL("../icons/modeling-fill.svg?v=a1d97d741f3c260410dd4324861e9b5952eaba6e18826995e497c0cd39d7cadf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
