export const name="chat-circle-slash-fill";
export const id="dl_d6cba66120784dcba147";
export const url=new URL("../icons/chat-circle-slash-fill.svg?v=ed75579046f23955b42e2b5b3f57d87a7f4a3f144c8b6d16eae02ffb6d805e9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
