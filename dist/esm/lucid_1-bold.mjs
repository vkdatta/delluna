export const name="lucid_1-bold";
export const id="dl_7d53a4bd28d944b7b715";
export const url=new URL("../icons/lucid_1-bold.svg?v=fad662b63ec07cabbe64846326830f5a7b9c0b7daf30ccf1c87441797f2aca13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
