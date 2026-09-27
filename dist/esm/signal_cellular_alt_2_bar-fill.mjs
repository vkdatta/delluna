export const name="signal_cellular_alt_2_bar-fill";
export const id="dl_ebac57e0c5421f6f0893";
export const url=new URL("../icons/signal_cellular_alt_2_bar-fill.svg?v=3117862aedd5ad6f2610da4aa965dfd5d24f4884cbab35e3c46022187a2e1a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
