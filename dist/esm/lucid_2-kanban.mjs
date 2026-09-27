export const name="lucid_2-kanban";
export const id="dl_4ec44e17861f4b5dbf89";
export const url=new URL("../icons/lucid_2-kanban.svg?v=5c354a9f6e33b22d16a7363b787d2797f9688fd17824cdc2755a82c6727b4230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
