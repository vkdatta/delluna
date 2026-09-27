export const name="lucid_2-file-type";
export const id="dl_c07af63eb98a4ef19521";
export const url=new URL("../icons/lucid_2-file-type.svg?v=a18851eba77c1e8dc66b9104517ad81a46f02792a447ea92410eaced408814dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
