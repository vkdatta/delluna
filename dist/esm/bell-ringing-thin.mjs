export const name="bell-ringing-thin";
export const id="dl_cdf47bee88f04ac29402";
export const url=new URL("../icons/bell-ringing-thin.svg?v=233e7a9c82983475d0ad5293161f0fc717d2a2ec370edf2649ee722598d270c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
