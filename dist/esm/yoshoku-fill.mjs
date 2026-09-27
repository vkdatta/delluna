export const name="yoshoku-fill";
export const id="dl_db4d0145b4e41bbb3fcf";
export const url=new URL("../icons/yoshoku-fill.svg?v=339c9795bb0728eb98de0774464d162ec53daba3ee7e3362b917ba77bb761708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
