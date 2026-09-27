export const name="chat_add_on-fill";
export const id="dl_c3c256a6bc74dce1b601";
export const url=new URL("../icons/chat_add_on-fill.svg?v=dc4115d790c2fbe35961f89dd696deaa72cefa5a13987d9ae4f9faf09b07145f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
