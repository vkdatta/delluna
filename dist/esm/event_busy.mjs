export const name="event_busy";
export const id="dl_6f698069d6e9e069ecd0";
export const url=new URL("../icons/event_busy.svg?v=fbcda8b803d168de733fa51f909eddac26685928286b14437562187b62ae72b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
