export const name="wifi_channel-fill";
export const id="dl_fd816850c5dc5988e275";
export const url=new URL("../icons/wifi_channel-fill.svg?v=d9833256bf3f3ce19d7204f710a347a0ac0420d507a6f28ec3a24f0d091f94c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
