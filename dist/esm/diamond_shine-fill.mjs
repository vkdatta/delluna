export const name="diamond_shine-fill";
export const id="dl_a2b4de6d6a6fd95da986";
export const url=new URL("../icons/diamond_shine-fill.svg?v=b9a044bace017afcc5115cd042aa9fec525ea892176f604a06416b2bc1fce8e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
