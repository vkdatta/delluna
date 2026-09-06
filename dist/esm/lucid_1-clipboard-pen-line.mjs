export const name="lucid_1-clipboard-pen-line";
export const id="dl_e305fde343c8461dae08";
export const url=new URL("../icons/lucid_1-clipboard-pen-line.svg?v=c72b5666b2f8b86bdd0784f636eff01ab00b7b95b293a0c8a6ad5b0f46c124da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
