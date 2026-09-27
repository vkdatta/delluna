export const name="lightning";
export const id="dl_b262026c923a42299e0b";
export const url=new URL("../icons/lightning.svg?v=9b6275d20db3f0cf60c74f198507e3734730f4e0ff1065a56a67e30dbeb34063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
