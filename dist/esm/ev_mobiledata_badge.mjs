export const name="ev_mobiledata_badge";
export const id="dl_46055bf332813c78a83f";
export const url=new URL("../icons/ev_mobiledata_badge.svg?v=405d38d7704811e04543413651c700012adef0238297f5fb8a08ee5fc081b0f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
