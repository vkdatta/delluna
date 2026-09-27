export const name="nest_farsight_seasonal";
export const id="dl_a5d7ecb0d8cd3e55f998";
export const url=new URL("../icons/nest_farsight_seasonal.svg?v=11cde1281f89ca4ed8ee2d99f07187f149856f63bea1ce0de33678cba044da97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
