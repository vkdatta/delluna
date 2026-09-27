export const name="number-square-two-fill";
export const id="dl_c57004296d1c48f19d95";
export const url=new URL("../icons/number-square-two-fill.svg?v=106cde135644df15dd251c5b25e17142c75d3f4937d8edafc667d654faf2387c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
