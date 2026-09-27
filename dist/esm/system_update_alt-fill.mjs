export const name="system_update_alt-fill";
export const id="dl_15ed00fbd4abe5e657a7";
export const url=new URL("../icons/system_update_alt-fill.svg?v=8bd813a9cd8971dc83cda4fa3fd1cc77b73371948066ad6e04dfc759072e2f3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
