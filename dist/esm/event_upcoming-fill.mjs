export const name="event_upcoming-fill";
export const id="dl_afac7a828bb659bc265a";
export const url=new URL("../icons/event_upcoming-fill.svg?v=39b399743b1199462c996938f639d2cb5a18eb746e1f7ebdfdcb99e4926f886d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
