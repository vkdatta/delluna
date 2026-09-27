export const name="kanji_alcohol-fill";
export const id="dl_d71449216632e189697f";
export const url=new URL("../icons/kanji_alcohol-fill.svg?v=ab3d181a9b783df80dbc818fdcba4b1e6371cf539a2e706e971e52667f23a214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
