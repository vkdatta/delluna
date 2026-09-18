export const name="signal_cellular_4_bar-fill";
export const id="dl_aa22d53025e14fce92a2";
export const url=new URL("../icons/S/signal_cellular_4_bar-fill.svg?v=2fc453794712f2f423275073e397fbe04b3fa0944003eaf494eaef52e6d57955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
