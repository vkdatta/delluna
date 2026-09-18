export const name="translate_indic-fill";
export const id="dl_672e2f6c56f54540936e";
export const url=new URL("../icons/translate_indic-fill.svg?v=dc3eb4b934e08752654a44e26e4cbc9dfaded63911b643feed58514b086c2a76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
