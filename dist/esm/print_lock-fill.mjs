export const name="print_lock-fill";
export const id="dl_661a685c05172767cfa2";
export const url=new URL("../icons/print_lock-fill.svg?v=547bbe6a55558c0cd095c6710d83fc604d9e03c467631e8d739418fc5d632541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
