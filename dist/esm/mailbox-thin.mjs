export const name="mailbox-thin";
export const id="dl_79c883ad751a46ed906c";
export const url=new URL("../icons/mailbox-thin.svg?v=ebe1cc288067a783041fd28a955c6755c784e1b35621a476e3535e94db2ef4eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
