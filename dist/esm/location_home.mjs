export const name="location_home";
export const id="dl_834effca590b40859467";
export const url=new URL("../icons/location_home.svg?v=4910db85881faad07cfc5d5600dbd61e1b1b4fbcc27f17e7c6501ccf0203e1b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
