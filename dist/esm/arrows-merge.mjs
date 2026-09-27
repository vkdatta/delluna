export const name="arrows-merge";
export const id="dl_7443ac29581d49ed940b";
export const url=new URL("../icons/arrows-merge.svg?v=b2c60e428526eda5f11af2b05a38005496a33a528509491a1ebff3b83d8b3f7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
