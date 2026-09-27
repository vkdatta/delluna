export const name="calendar-light";
export const id="dl_1d1550866bdb4ca5966e";
export const url=new URL("../icons/calendar-light.svg?v=50b42515e5499e01019bc537aa0fdfede20eab2d3e1752e9570e9a4e7b499f2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
