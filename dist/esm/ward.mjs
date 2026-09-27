export const name="ward";
export const id="dl_acd1dde1c4dec82c831e";
export const url=new URL("../icons/ward.svg?v=8161ef342960b5f4bb3f0523179792d3f645956d9de922b4a946e0ee10377afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
