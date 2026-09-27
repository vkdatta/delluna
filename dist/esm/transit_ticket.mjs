export const name="transit_ticket";
export const id="dl_c7eafb4823e0f69991a6";
export const url=new URL("../icons/transit_ticket.svg?v=a2421fb962b1b550aa5b6b0e7d2f31f431ff5b63f8238372b0b9e250fa188e5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
