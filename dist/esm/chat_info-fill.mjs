export const name="chat_info-fill";
export const id="dl_0982057e07ce14f80b65";
export const url=new URL("../icons/chat_info-fill.svg?v=a0b3cbb6abf9822bb7f96023ab8160f392f053ea2b14bf82aa4e3f44ed92f2e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
