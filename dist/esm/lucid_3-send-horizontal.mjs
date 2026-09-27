export const name="lucid_3-send-horizontal";
export const id="dl_a97cdcb1a94c43a49d33";
export const url=new URL("../icons/lucid_3-send-horizontal.svg?v=2aca505e74772ffe90f7a4667acf8d909b1dcb3b9c9d2560e8d5e3876617f655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
