export const name="file-csv-duotone";
export const id="dl_b09e3e71558948429a97";
export const url=new URL("../icons/file-csv-duotone.svg?v=1452d1d65be9d1505f6fa97f829cf24e1043fe9bfee7ca8f1b53b9eda774992d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
