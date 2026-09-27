export const name="meeting_room-fill";
export const id="dl_9945bfa549270d5ec856";
export const url=new URL("../icons/meeting_room-fill.svg?v=f268a40194fbed851ffb66a3400d3bee4dcdfed899c9489c082a4f2336a86d34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
