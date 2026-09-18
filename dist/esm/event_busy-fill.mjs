export const name="event_busy-fill";
export const id="dl_2e8ca242c11d4057b847";
export const url=new URL("../icons/event_busy-fill.svg?v=9b537cda210af6ea22e875de2468b83e33906f4236bdde43efdd43d14679397e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
