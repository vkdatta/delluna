export const name="lucid_2-file-digit";
export const id="dl_bdc6218ec225400c99c1";
export const url=new URL("../icons/lucid_2-file-digit.svg?v=3f3f785c3952940311b9dec97a2dc1b8341d99691ed2c921ea4a0e1807a52551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
