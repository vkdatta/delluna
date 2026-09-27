export const name="ticket-light";
export const id="dl_1b6845760f9804b43466";
export const url=new URL("../icons/ticket-light.svg?v=8da299d7330c59f4f49580c7d20a4a591366b05df232d5e42f69deefb0adf9a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
