export const name="wb_sunny-fill";
export const id="dl_5d0c12242cb6c090040b";
export const url=new URL("../icons/wb_sunny-fill.svg?v=e281afcd5d3c554c25550ea0c29442a951806518b3e4188d1894e9221a5a0a51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
