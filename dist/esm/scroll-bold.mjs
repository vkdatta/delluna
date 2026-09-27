export const name="scroll-bold";
export const id="dl_ea27731b629e69c2e690";
export const url=new URL("../icons/scroll-bold.svg?v=e12718d40717e384022be3bc331cbd294dc3b8a5b4b6623dd471d1d74cd58668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
