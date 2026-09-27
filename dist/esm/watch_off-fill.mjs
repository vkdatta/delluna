export const name="watch_off-fill";
export const id="dl_e7f5984d7b992366dbeb";
export const url=new URL("../icons/watch_off-fill.svg?v=23a197a38c31c7270f7926a31ca1ca1675c137e35f480e19c7e144f394a3564e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
