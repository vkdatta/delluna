export const name="ticket-bold";
export const id="dl_d21e8fedf5874f0c8140";
export const url=new URL("../icons/T/ticket-bold.svg?v=469612c545944a60057f116be736f2717731e7c9c08647cc64d5199f697afedb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
