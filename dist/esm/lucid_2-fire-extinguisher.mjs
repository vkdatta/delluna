export const name="lucid_2-fire-extinguisher";
export const id="dl_c95e9a284731469a8870";
export const url=new URL("../icons/lucid_2-fire-extinguisher.svg?v=3bd840340e4d62ee0d25256aac40e9e1e9aa20ec694fa2a8274f573dea98bf97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
