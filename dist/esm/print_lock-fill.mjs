export const name="print_lock-fill";
export const id="dl_3a8f19d2001a436bb170";
export const url=new URL("../icons/P/print_lock-fill.svg?v=4f1be7bd678550cb4a7f6e3df4ff79ad632b2fc868f945a25a75f8c1f40cab1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
