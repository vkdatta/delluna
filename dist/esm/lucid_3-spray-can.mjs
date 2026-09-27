export const name="lucid_3-spray-can";
export const id="dl_e1164d5753c34c539db7";
export const url=new URL("../icons/lucid_3-spray-can.svg?v=cf674268cc83c72f86cbb47d83ac74a7a2112439af3a6f0630445a273d6fd5bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
