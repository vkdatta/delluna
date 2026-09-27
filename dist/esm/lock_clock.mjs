export const name="lock_clock";
export const id="dl_6281b81f137b2a8d9e8f";
export const url=new URL("../icons/lock_clock.svg?v=78c14f1baf77e62503f5e083b92fdfb4f78b4e99b0414c1e8fe2476cfc248f91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
