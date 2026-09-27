export const name="7k_plus";
export const id="dl_36a2c8dd5e555db1a662";
export const url=new URL("../icons/7k_plus.svg?v=1ca12d6681fc61bd96bba56483725969093c0e75f937975f2bc8bb7c4bf45fa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
