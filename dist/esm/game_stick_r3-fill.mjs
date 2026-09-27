export const name="game_stick_r3-fill";
export const id="dl_be46c5896aefe21b7077";
export const url=new URL("../icons/game_stick_r3-fill.svg?v=61211b460b8b678d1472f5fa4601ba04ed080962689757bbe43385f9fc418acb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
