export const name="pending_actions-fill";
export const id="dl_e5480d8ab854447caee5";
export const url=new URL("../icons/pending_actions-fill.svg?v=d8296ac6e9c5968eceb1bfec24f15bf6cddd88c9eccababbfff93426c7bbb6dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
