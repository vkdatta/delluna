export const name="event-fill";
export const id="dl_00f751d177364b5981fb";
export const url=new URL("../icons/E/event-fill.svg?v=907555958850f570b9195989326b0b7f9fd5015d38a3f0fd63aae7e418e4f25e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
