export const name="mark_chat_unread-fill";
export const id="dl_8eda7b34af2261ff0159";
export const url=new URL("../icons/mark_chat_unread-fill.svg?v=5a3758cbbd7f5bf5cf2de46c7c4b4fff0522f400cbb29145a528cf37f02230ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
