export const name="reset_tv";
export const id="dl_2610ed16086b35d8f123";
export const url=new URL("../icons/reset_tv.svg?v=36e590241fa2916f6548aeffce954bb6b6bd5748de448ff9a8a46982b4038134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
