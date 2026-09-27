export const name="alarm_smart_wake";
export const id="dl_d21c001bcd661e768f94";
export const url=new URL("../icons/alarm_smart_wake.svg?v=9b512845890251c99ee0b9f319ab3026232a884b06d8fce4fddedb9cfe065dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
