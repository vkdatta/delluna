export const name="popcorn-light";
export const id="dl_05a709885b064d39a2c1";
export const url=new URL("../icons/popcorn-light.svg?v=ad3894c19874ed66b47becd1d60017dc1785aa733f011e37c19e593d0b3c9900",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
