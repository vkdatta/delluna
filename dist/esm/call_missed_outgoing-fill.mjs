export const name="call_missed_outgoing-fill";
export const id="dl_9bf591d3f3f92158094b";
export const url=new URL("../icons/call_missed_outgoing-fill.svg?v=3c35f88d35f467338981c8004bdeca83984a71a9e3130d242d390ae5d8fb2268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
