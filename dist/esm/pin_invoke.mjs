export const name="pin_invoke";
export const id="dl_e95b329492aac1d0a5ce";
export const url=new URL("../icons/pin_invoke.svg?v=6860aa4c3b21868d2744cdeb3da33917f867d6f5bcdeb9ca381d129d735b9d53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
