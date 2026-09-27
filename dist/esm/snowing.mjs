export const name="snowing";
export const id="dl_68ec836aa3e4c1db1af2";
export const url=new URL("../icons/snowing.svg?v=2715839010e843d08d4ca1e307ee32953ce8c1f1d75dbe7f715a18b220efd95a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
