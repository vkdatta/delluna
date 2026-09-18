export const name="wifi_2_bar-fill";
export const id="dl_dbbb4504fdbf4bacbca1";
export const url=new URL("../icons/W/wifi_2_bar-fill.svg?v=11eadb9c1e9f130280abb03ba93e816ea9f21fc5fc89e0545de3aecdddec069f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
