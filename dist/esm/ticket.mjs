export const name="ticket";
export const id="dl_5bf7d31746db39645426";
export const url=new URL("../icons/ticket.svg?v=ba80751b1c7b5946d281c7c1ccbe78ee53072330e8662a8e7ce3a99321a9b615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
