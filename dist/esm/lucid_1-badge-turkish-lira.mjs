export const name="lucid_1-badge-turkish-lira";
export const id="dl_e5298cca1b5c42aa834e";
export const url=new URL("../icons/lucid_1-badge-turkish-lira.svg?v=027dbe9b364545f83f6c9e0c9d2e79385f997eec9d0fcd7062741a3b203fdf63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
