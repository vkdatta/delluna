export const name="lucid_2-luggage";
export const id="dl_f507c993da7d4c6381a1";
export const url=new URL("../icons/lucid_2-luggage.svg?v=d3a527a0c63f2e487cc0028bb4195a5130920ccda2cd69495797e690e651a70f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
