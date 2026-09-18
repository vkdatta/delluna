export const name="remove_selection-fill";
export const id="dl_e220658dd41845479448";
export const url=new URL("../icons/R/remove_selection-fill.svg?v=6dd31f1ec8f41cde9b0c2e1283e4b3c8911e32fd6b41395738f2d6a672227ea7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
