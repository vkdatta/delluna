export const name="calendar-heart-bold";
export const id="dl_09efb0e980114ca0a064";
export const url=new URL("../icons/calendar-heart-bold.svg?v=e917bc96bde6b4167ab4fc501029d08ed16d9af100fb93e5a9f6b7c64491d044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
