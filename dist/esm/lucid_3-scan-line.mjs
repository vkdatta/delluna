export const name="lucid_3-scan-line";
export const id="dl_7124eea1b2374f99b223";
export const url=new URL("../icons/lucid_3-scan-line.svg?v=21562d6ef804897b8038a41b8432e99d60df038a613f717152b7e174f0be92ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
