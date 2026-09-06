export const name="lucid_3-rabbit";
export const id="dl_4483d0b073cf4174bf78";
export const url=new URL("../icons/lucid_3-rabbit.svg?v=c569db87228aa715b2f10ce037a8f8657a8d4d9e63cc422cd2bd4910fc9b24d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
