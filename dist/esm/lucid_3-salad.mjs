export const name="lucid_3-salad";
export const id="dl_53eeb309ba414c199892";
export const url=new URL("../icons/lucid_3-salad.svg?v=eae41278adf5fab321b8564a6d715c18b5cd64da98105214f26f444ebe74a5e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
