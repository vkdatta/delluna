export const name="party_mode";
export const id="dl_c61bcf3cac174491a362";
export const url=new URL("../icons/party_mode.svg?v=ea73fcc497491ff8b04852589059d250aad939864dd0046db7e6bcbd1dad9e7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
