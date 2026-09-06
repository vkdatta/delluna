export const name="chart-polar-bold";
export const id="dl_55de25c0caab4b49bca8";
export const url=new URL("../icons/chart-polar-bold.svg?v=57c537682901b6608813d5669acb06b5e2ef2827d767396b41abc016d0302048",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
