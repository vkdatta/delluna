export const name="chat_add_on-fill";
export const id="dl_63ee65c369b935f870ab";
export const url=new URL("../icons/chat_add_on-fill.svg?v=79796a480347a80b49030889fa8250466972f9bd1b3d7eefc3eadfaf3aad220b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
