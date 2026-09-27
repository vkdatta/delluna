export const name="lucid_3-message-square-reply";
export const id="dl_60c744a24be54f73a220";
export const url=new URL("../icons/lucid_3-message-square-reply.svg?v=af452b675931332aec45952c67616f59d5fde5f22724fdb2d9d96210eba6ab95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
