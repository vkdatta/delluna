export const name="calendar-x-fill";
export const id="dl_5cab7cc6ef4c476782f3";
export const url=new URL("../icons/calendar-x-fill.svg?v=396ccbe52b577ab0739ff4ae1f058b32c077c4be5e0189c1b777b20f3bfb56ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
