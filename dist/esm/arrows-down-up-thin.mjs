export const name="arrows-down-up-thin";
export const id="dl_723d168d63df4ff2b28c";
export const url=new URL("../icons/arrows-down-up-thin.svg?v=820c47bd651a2b28aceefcd4fe2a7523fc16891faea6f2e6d0f5d1c876e33841",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
