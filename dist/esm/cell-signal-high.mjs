export const name="cell-signal-high";
export const id="dl_daca225529b34338b891";
export const url=new URL("../icons/cell-signal-high.svg?v=b2f818229dae78232fb1da84b7f79c632d81e314a62161027ac1bcaebbe88483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
