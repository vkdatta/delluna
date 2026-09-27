export const name="speaker_phone";
export const id="dl_d0b8ca1fabd5b1bbea32";
export const url=new URL("../icons/speaker_phone.svg?v=6dfd8f3b098c501e94855c390769603ce0f5b19b75ebd77110cdb1a9bc5ae8f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
