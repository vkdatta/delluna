export const name="lucid_3-reply-all";
export const id="dl_6ed1c8b4639c47f28ae6";
export const url=new URL("../icons/lucid_3-reply-all.svg?v=5966962093d1eb82907ca9e682508dac03291b90031dae1c1a4ff8d4740713de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
