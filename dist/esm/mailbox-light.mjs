export const name="mailbox-light";
export const id="dl_232935cf031a458998a5";
export const url=new URL("../icons/mailbox-light.svg?v=3d075f1c15ecbe8e8191972d098288d28146947e6285c375dbbc47a2baa5c073",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
