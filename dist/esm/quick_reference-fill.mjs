export const name="quick_reference-fill";
export const id="dl_12bde1383cab85e0c398";
export const url=new URL("../icons/quick_reference-fill.svg?v=14a0216d9bb9292d9e5446670939aaac7a8687fc05189172b154b70f2e834420",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
