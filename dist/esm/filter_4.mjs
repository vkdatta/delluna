export const name="filter_4";
export const id="dl_b817da48334d4726b16b";
export const url=new URL("../icons/filter_4.svg?v=46ba36f75ddb9f555e2b107b3f545ea3c1616f2542516453b2550c70857fbb54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
