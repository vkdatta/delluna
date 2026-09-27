export const name="lucid_1-armchair";
export const id="dl_b7a2a7a288dc459aba9c";
export const url=new URL("../icons/lucid_1-armchair.svg?v=916bc28d51efdda0f2ffd3a3fbedc039edf01147bedc6b5ca1ade86ef049ce22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
