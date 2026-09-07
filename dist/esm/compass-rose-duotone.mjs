export const name="compass-rose-duotone";
export const id="dl_7daf52205b9b48a5ae70";
export const url=new URL("../icons/compass-rose-duotone.svg?v=21f40b31f7f3f73af9a05b0d669b2dcfba28ceff0f57247253c1f55b2442f46a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
