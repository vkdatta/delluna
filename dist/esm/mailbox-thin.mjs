export const name="mailbox-thin";
export const id="dl_79c883ad751a46ed906c";
export const url=new URL("../icons/mailbox-thin.svg?v=7310d8ec88db739d4207481a47057192c3afa0c2265ca84f4fa1934a0c2980df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
