export const name="nest_wifi_pro-fill";
export const id="dl_ad3971cd628f49339179";
export const url=new URL("../icons/N/nest_wifi_pro-fill.svg?v=e6e9669eb610c98dfab3c1c2c291f7bd475150fa503c9e823e301857fac86f57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
