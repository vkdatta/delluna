export const name="lucid_3-reply-all";
export const id="dl_6ed1c8b4639c47f28ae6";
export const url=new URL("../icons/lucid_3-reply-all.svg?v=d71bb187ce7931ebaf9696fb68e296fc777c399fe7185db5b46b94c98f73b735",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
