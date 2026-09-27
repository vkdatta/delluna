export const name="caret-up-fill";
export const id="dl_e339885099c24b7c930b";
export const url=new URL("../icons/caret-up-fill.svg?v=8d29c9c75f5ce44559866cae40c8bc6e35ebc1784b5829dc295979484f982c2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
