export const name="event_seat-fill";
export const id="dl_1f2fd02c6b50b08e48ac";
export const url=new URL("../icons/event_seat-fill.svg?v=4bed8ae77a4d38844aa80cae39db24553e2ee1f3de66beb366909544ef42cd0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
