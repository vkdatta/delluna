export const name="ticket-plus";
export const id="dl_764a3aa3578745b5b8a2";
export const url=new URL("../icons/ticket-plus.svg?v=d548aefe3a72199c7d65f03d7d5862b5ab88da18948566ce532e91ed965c2b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
