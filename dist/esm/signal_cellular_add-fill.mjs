export const name="signal_cellular_add-fill";
export const id="dl_065c4efa1cca4204b3e2";
export const url=new URL("../icons/signal_cellular_add-fill.svg?v=3af9a3908dd332136125f51b3b445854d594694ec693fd10213c658c6694acad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
