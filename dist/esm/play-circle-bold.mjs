export const name="play-circle-bold";
export const id="dl_d973819eb96541028341";
export const url=new URL("../icons/play-circle-bold.svg?v=75f1b9c1d82f48385a545799ff339ce457ce142331466843240b48a6b6021fce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
