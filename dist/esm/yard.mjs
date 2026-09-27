export const name="yard";
export const id="dl_4898bb9d7d10c47a0a36";
export const url=new URL("../icons/yard.svg?v=463a6733a6260572d890c18ba306cf51fefd0d37602633bc094ce50bb90fe78a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
