export const name="signal_cellular_alt_off";
export const id="dl_a4af16b642be2def6de3";
export const url=new URL("../icons/signal_cellular_alt_off.svg?v=854b6b151abc6fd25ea3a0e01087e75b15b01e8681ba55ce3572d3cffcbcfb97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
