export const name="clock-afternoon";
export const id="dl_ff893ca59bc94bf38f33";
export const url=new URL("../icons/clock-afternoon.svg?v=4a6e983c06cc5415d91dd1add28c52aee9770791e398747e686748aead44b845",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
