export const name="signal_cellular_alt_1_bar-fill";
export const id="dl_c4e6f3228c514e88c7ce";
export const url=new URL("../icons/signal_cellular_alt_1_bar-fill.svg?v=4e32a4c9a1953060a475e1f031a9d22426cc6c747f566afdb009c361d186cea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
