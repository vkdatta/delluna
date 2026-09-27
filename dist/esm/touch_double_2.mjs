export const name="touch_double_2";
export const id="dl_460bfc1d4665aac791b4";
export const url=new URL("../icons/touch_double_2.svg?v=3eff9477ba334f9cd9c76d8dfd722db6a645917b0a054e2c0280cdf994cf046b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
