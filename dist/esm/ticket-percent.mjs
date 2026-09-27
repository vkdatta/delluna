export const name="ticket-percent";
export const id="dl_00598cf03ae440fca640";
export const url=new URL("../icons/ticket-percent.svg?v=901d37f4b30a78defd41c288d2e0df0ff4153e7aa538a54464aa5be22f33592d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
