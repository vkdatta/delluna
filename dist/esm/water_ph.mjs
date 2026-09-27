export const name="water_ph";
export const id="dl_849c5736ad92e6451735";
export const url=new URL("../icons/water_ph.svg?v=44d0f473fa02b0fcb6db68babc3bcc4c614d09206e03a72a642931e026e52b26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
