export const name="dice-two-fill";
export const id="dl_08f126c0e9784e14aff3";
export const url=new URL("../icons/dice-two-fill.svg?v=3cfe880cd1e49387934f4d8afd2ca9dd117aa145fbea28e49a1830876d7bd75a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
