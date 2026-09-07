export const name="calendar-heart-thin";
export const id="dl_01382916e7ec43ecab39";
export const url=new URL("../icons/calendar-heart-thin.svg?v=63f1b995418d240a37b47f894fe4caf1a49e3224f8c2b72f4c2fcdcaeb0b4510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
