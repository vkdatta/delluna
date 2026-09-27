export const name="lucid_2-germ";
export const id="dl_7e6d2e997e1848abb3b0";
export const url=new URL("../icons/lucid_2-germ.svg?v=734a1ef715d9f3222d4df7c02399c7b7babb90cd1e3aabc2c4cc945b900cf2e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
