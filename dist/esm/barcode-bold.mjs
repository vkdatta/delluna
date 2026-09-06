export const name="barcode-bold";
export const id="dl_47d4c6285444487baa36";
export const url=new URL("../icons/barcode-bold.svg?v=6da273244efba6dfb8f8c79038f7cf2d2305cb1683748306822c1319af710854",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
