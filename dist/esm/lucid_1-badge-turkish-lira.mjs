export const name="lucid_1-badge-turkish-lira";
export const id="dl_e5298cca1b5c42aa834e";
export const url=new URL("../icons/lucid_1-badge-turkish-lira.svg?v=9ac45d5e8257985e350508e1827819f0d783c421753fdeeb1fa5b60421cb4de1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
