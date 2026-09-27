export const name="chat_bubble-fill";
export const id="dl_b2256c13c84eb5a2db98";
export const url=new URL("../icons/chat_bubble-fill.svg?v=ad5d3850a7de16436f896a3f856f729465c78e30aa68dd578fd830239a5d06db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
