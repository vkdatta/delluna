export const name="signal_cellular_4_bar-fill";
export const id="dl_6ce68b2fb8f1025f48a8";
export const url=new URL("../icons/signal_cellular_4_bar-fill.svg?v=2fc453794712f2f423275073e397fbe04b3fa0944003eaf494eaef52e6d57955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
