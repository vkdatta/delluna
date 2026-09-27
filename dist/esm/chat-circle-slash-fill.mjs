export const name="chat-circle-slash-fill";
export const id="dl_d6cba66120784dcba147";
export const url=new URL("../icons/chat-circle-slash-fill.svg?v=725c0ea2d97ca0c71c9e28d2cf16606ab33ea36fa09c8d5ea3869a78a09b0c62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
