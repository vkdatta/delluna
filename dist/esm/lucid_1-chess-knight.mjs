export const name="lucid_1-chess-knight";
export const id="dl_f221f5322643448898d6";
export const url=new URL("../icons/lucid_1-chess-knight.svg?v=443fc917d301037abc661a024b847195e0be5b8ec42213813d0ad320188672c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
