export const name="perm_data_setting-fill";
export const id="dl_ebcf5644e38ad3e5228f";
export const url=new URL("../icons/perm_data_setting-fill.svg?v=51a81d4f07ac00cdeaeafff3229b070e251918592eae416e7103448030d8cebc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
