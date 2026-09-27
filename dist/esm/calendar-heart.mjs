export const name="calendar-heart";
export const id="dl_a6c9001215594032991d";
export const url=new URL("../icons/calendar-heart.svg?v=7c56293572c950097778f4f5c330ceabe33f7d1af1ac5f83b2eb8a51a51f5962",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
