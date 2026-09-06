export const name="calendar-heart";
export const id="dl_a6c9001215594032991d";
export const url=new URL("../icons/calendar-heart.svg?v=cb4b354fd88a92fe8e17d7e91e9b3c8604a8c2d968bbd82f8869a84c4c58a9a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
