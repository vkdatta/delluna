export const name="calendar-dots-light";
export const id="dl_7fd0233a125645dda89e";
export const url=new URL("../icons/calendar-dots-light.svg?v=0bebec59cb47098c744e5c66ae76674584fba5a20ce309824cc39598d0535e10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
