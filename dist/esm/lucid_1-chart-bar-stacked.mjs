export const name="lucid_1-chart-bar-stacked";
export const id="dl_880a4353236d4d28b273";
export const url=new URL("../icons/lucid_1-chart-bar-stacked.svg?v=cf78ca61d709d1cc91756e3ee3342f992f4da7c05097df9d863139e67ae50f88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
