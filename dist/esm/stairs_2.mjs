export const name="stairs_2";
export const id="dl_eb9ffa3adc5c411a9980";
export const url=new URL("../icons/stairs_2.svg?v=f5a2a87a2ebb6b57479c0f96728023c755bbbdf0034bc1d8144444684dde4ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
