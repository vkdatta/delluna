export const name="calendar-x-bold";
export const id="dl_be3beb72f1eb4fdf84d1";
export const url=new URL("../icons/calendar-x-bold.svg?v=07b8d80f3a8ba71ed6a6a082a395e774c10817ec0ecffdf4728f40992cfd5729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
