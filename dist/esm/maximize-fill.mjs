export const name="maximize-fill";
export const id="dl_916091e75f51428c9905";
export const url=new URL("../icons/M/maximize-fill.svg?v=8f482a9126acafe65f6890b5ce0179947ba5ad8b66d6053252b49eab6e7a5c53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
