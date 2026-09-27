export const name="lucid_3-reply-all";
export const id="dl_6ed1c8b4639c47f28ae6";
export const url=new URL("../icons/lucid_3-reply-all.svg?v=7ff7729c05f125f9ee516968e3b2e1d37fc32bf717a26015f352c5bb4162899b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
