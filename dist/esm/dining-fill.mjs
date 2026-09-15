export const name="dining-fill";
export const id="dl_3e208fdb886c463fb473";
export const url=new URL("../icons/D/dining-fill.svg?v=a4cbfc0968d8fa5367a12933605bb657e4cd4afe2ed478119be25df909791bbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
