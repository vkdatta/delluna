export const name="computer_cancel";
export const id="dl_d3bbaa556c5f920eff4e";
export const url=new URL("../icons/computer_cancel.svg?v=cab7aa3d229bf45e654d8a2f2c45b3b5573b51501b7358ec147f7c5e40ee03ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
