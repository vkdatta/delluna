export const name="coin-fill";
export const id="dl_3e952df4508448488078";
export const url=new URL("../icons/coin-fill.svg?v=e6e7e55c7c270b1d117a1c6eb03f24a8e56fc07028f971bc4779bd2fda3f5f7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
