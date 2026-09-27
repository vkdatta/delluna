export const name="dot-duotone";
export const id="dl_1d1fe3e885314ec3a723";
export const url=new URL("../icons/dot-duotone.svg?v=af2dc2c271d59882de215062bed6d448441ce7484ccf43c8502dfa99dac8bfb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
