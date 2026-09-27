export const name="game_bumper_left-fill";
export const id="dl_6077560a4ffba87cbb9a";
export const url=new URL("../icons/game_bumper_left-fill.svg?v=ca01d6ea00141831c99ac86b2e865dfbb0d016fe31a92ad8ca189ebdf5a8bbee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
