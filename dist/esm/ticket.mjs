export const name="ticket";
export const id="dl_0f25a9f07fb80b24debc";
export const url=new URL("../icons/ticket.svg?v=1746e7e250c662647605d10e3bb11b1966949b3bcbd16580bf65c8a35582d493",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
