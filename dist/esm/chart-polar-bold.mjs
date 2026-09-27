export const name="chart-polar-bold";
export const id="dl_55de25c0caab4b49bca8";
export const url=new URL("../icons/chart-polar-bold.svg?v=dba2ee17d21d079ff8245ed5f7103ea6d7e7403e2ca239c45d8dd28d4f772831",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
