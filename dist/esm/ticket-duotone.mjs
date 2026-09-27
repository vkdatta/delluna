export const name="ticket-duotone";
export const id="dl_e3b10bed2a3626879f7a";
export const url=new URL("../icons/ticket-duotone.svg?v=89673690a1fd213542b4793dde4ae2e7d165fda42e06fa01e13a96682a0290a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
