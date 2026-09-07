export const name="arrow_stem";
export const id="dl_45c7abc018b54602a778";
export const url=new URL("../icons/arrow_stem.svg?v=4a6949edbd8d591e214e71a4c04af8683568e70c1db6415cf5829353c6cde86d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
