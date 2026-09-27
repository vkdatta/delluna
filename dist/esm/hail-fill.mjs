export const name="hail-fill";
export const id="dl_9b6e36118193422c031c";
export const url=new URL("../icons/hail-fill.svg?v=5d1efd47b697632849124f6acf104c6a4d52bd1d441ffff1535434a149966209",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
