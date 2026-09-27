export const name="alien-light";
export const id="dl_bfe19ba2480447e08db3";
export const url=new URL("../icons/alien-light.svg?v=7f17576c6754eecb726818909d3a7a3c0b8a828f23e584149a8ce53fe438e18f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
