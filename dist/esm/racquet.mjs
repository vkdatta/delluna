export const name="racquet";
export const id="dl_f1620339e6d649e383ba";
export const url=new URL("../icons/racquet.svg?v=beec1e95f7449b28e4a14ff924be15f1306067bc3255726770f81cb66fc761d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
