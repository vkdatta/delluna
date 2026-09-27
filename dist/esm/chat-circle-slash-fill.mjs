export const name="chat-circle-slash-fill";
export const id="dl_d6cba66120784dcba147";
export const url=new URL("../icons/chat-circle-slash-fill.svg?v=b0d6fa2d13aee3b176aebce8fc5d9b86b21cace76686d19f386c06007064eb78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
