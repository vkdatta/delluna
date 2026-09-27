export const name="lucid_1-ampersands";
export const id="dl_be004c3cac68420bac54";
export const url=new URL("../icons/lucid_1-ampersands.svg?v=502cfef98fc41dba3f98f2802eb7ed0b718bb82f9988e1931d6975cca594fc68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
