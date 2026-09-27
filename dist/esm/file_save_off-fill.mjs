export const name="file_save_off-fill";
export const id="dl_2cab2226c19ab42f0dee";
export const url=new URL("../icons/file_save_off-fill.svg?v=612b5a05808a68cb17c6efcbdee4895886dd052f6930ac78145493769f65e0c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
