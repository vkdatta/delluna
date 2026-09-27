export const name="mobile_unlock";
export const id="dl_6c8d502b0f799b67251a";
export const url=new URL("../icons/mobile_unlock.svg?v=03a2ce2499563dd459c4fd57e84910d2650159186b8c02743f2c6d25ac1bc562",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
