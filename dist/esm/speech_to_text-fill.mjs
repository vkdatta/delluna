export const name="speech_to_text-fill";
export const id="dl_27aabd2ad72543fa8d72";
export const url=new URL("../icons/speech_to_text-fill.svg?v=069e67ff91bc6011debfe81d370e7fcb40ec012794daa66dffafb22352ad71bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
