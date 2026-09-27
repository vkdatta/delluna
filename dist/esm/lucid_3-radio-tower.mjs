export const name="lucid_3-radio-tower";
export const id="dl_523184d24fa447ab8fc3";
export const url=new URL("../icons/lucid_3-radio-tower.svg?v=85d57196a34f215a53826267bc6b8c885a920471a89bf409d048b6f5bccc9385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
