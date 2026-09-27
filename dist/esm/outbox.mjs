export const name="outbox";
export const id="dl_2d131aa6c77aec02e4b0";
export const url=new URL("../icons/outbox.svg?v=477ec266da565eb4e1cfcfcf9600f8c7a0c50e3ceec86ca8d9e71cc3223b3993",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
