export const name="csv-fill";
export const id="dl_ce3c976b8f03623e1d4e";
export const url=new URL("../icons/csv-fill.svg?v=cc5c690644c76c1434b6337f4fbad1036980631671254de64affa5260018b9da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
