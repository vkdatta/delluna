export const name="mailbox-duotone";
export const id="dl_a8bd1c10c8f7468ea3c6";
export const url=new URL("../icons/mailbox-duotone.svg?v=8b3a4385d190e7db512bc659fd3fb20b66173b56ac1064dfe9cf357edef55d5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
