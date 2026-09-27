export const name="seat-duotone";
export const id="dl_b3c446c1dd1173875cdb";
export const url=new URL("../icons/seat-duotone.svg?v=e9958b564759d8550a53675a36e401f48d11d27336254d8cea61aa30b04149b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
