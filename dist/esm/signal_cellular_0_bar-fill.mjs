export const name="signal_cellular_0_bar-fill";
export const id="dl_1ef15fcec6af4831aa1a";
export const url=new URL("../icons/signal_cellular_0_bar-fill.svg?v=d21934a97e1d47b40d357000a136ae235cb9dc15fbf632ea6c140097ad1bb363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
