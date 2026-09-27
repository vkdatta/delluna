export const name="lucid_2-file-lock";
export const id="dl_6e24ab43d1984c358f51";
export const url=new URL("../icons/lucid_2-file-lock.svg?v=5a6c877d958d7ce1973337db4abc58f1b8aac00307b2fc599f711e88f42c200d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
