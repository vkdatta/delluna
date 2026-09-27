export const name="chips-fill";
export const id="dl_f9ea3a25e37bc22f39f7";
export const url=new URL("../icons/chips-fill.svg?v=147f7ff510a2f58655d45c5675baab27b805566c230cdfa473e95793281ca899",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
