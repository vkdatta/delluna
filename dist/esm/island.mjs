export const name="island";
export const id="dl_ced74f7b393b438cb870";
export const url=new URL("../icons/island.svg?v=746c6bee3cdda8e1e4222fffb81a566edbd857e11e08e43f1e68d57ae9c978bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
