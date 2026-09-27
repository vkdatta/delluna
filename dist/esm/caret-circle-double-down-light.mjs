export const name="caret-circle-double-down-light";
export const id="dl_79a0bb0e07e04c798ab2";
export const url=new URL("../icons/caret-circle-double-down-light.svg?v=9fbf1a90c6e41da4b0a6e00e52231d851eeaca98433a64d9b89ff4eb4af0d8aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
