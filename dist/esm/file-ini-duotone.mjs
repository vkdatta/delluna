export const name="file-ini-duotone";
export const id="dl_87b7c59adc9d40c6a95b";
export const url=new URL("../icons/file-ini-duotone.svg?v=647e813628ea979bb66d845091b0f0e87d5831bc7d854c3f58a9b0cdb9677d91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
