export const name="unsubscribe";
export const id="dl_ccdcfbdb98ac067c2311";
export const url=new URL("../icons/unsubscribe.svg?v=3b5a3545f2be0aa3d265ebad2bd188a822b0b7589209933880df923dc5838f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
