export const name="lucid_1-circle-plus";
export const id="dl_2b21c5c0b0034b9dae81";
export const url=new URL("../icons/lucid_1-circle-plus.svg?v=dc4606df2e964f108efaffa60bb404fbe22c8e979bb1d1dba1e44840c439a3c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
