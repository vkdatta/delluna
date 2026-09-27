export const name="numpad-bold";
export const id="dl_50bfd7a8c4be43e98afb";
export const url=new URL("../icons/numpad-bold.svg?v=059c75cfa4b207f5d68e568834030a3c3672e47e44da31eff912012efae2f907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
