export const name="earbuds_2-fill";
export const id="dl_d2b25fed739123cddfbe";
export const url=new URL("../icons/earbuds_2-fill.svg?v=2ccd2872a37ee48a993b720250c1af7edf9ce28662274822ca73197374cfa853",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
