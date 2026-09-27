export const name="pause-circle";
export const id="dl_bbb3ea8dbce84b7b981b";
export const url=new URL("../icons/pause-circle.svg?v=3073a0692e2afb3a48596b115acd18b09a551157a64f57ba3f8389a709d6c958",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
