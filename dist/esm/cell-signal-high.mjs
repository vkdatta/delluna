export const name="cell-signal-high";
export const id="dl_daca225529b34338b891";
export const url=new URL("../icons/cell-signal-high.svg?v=e89cafb38066fa118807c886989278d7c2ad5fb519cc022d9f51fce6beac2e27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
