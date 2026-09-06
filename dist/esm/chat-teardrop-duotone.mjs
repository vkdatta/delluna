export const name="chat-teardrop-duotone";
export const id="dl_d435696dc54545cbbd26";
export const url=new URL("../icons/chat-teardrop-duotone.svg?v=36767c8220181985f2ac832145467a81811bb149035109db1d2a7f556d1cee97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
