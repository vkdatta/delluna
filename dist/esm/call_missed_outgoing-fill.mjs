export const name="call_missed_outgoing-fill";
export const id="dl_f72ecb6b008c92427ca7";
export const url=new URL("../icons/call_missed_outgoing-fill.svg?v=c5a9eed7b8d74915e2baff2f99c8d67ab34a184d4142ed492066afd4acd4b227",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
