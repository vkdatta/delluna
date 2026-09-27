export const name="ad_group-fill";
export const id="dl_380f5aa7b8c9e7d8435d";
export const url=new URL("../icons/ad_group-fill.svg?v=ee34402279816c0e2b95bc80d35fcf2ab74e508e12b7bb33849a3af7e6fac1f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
