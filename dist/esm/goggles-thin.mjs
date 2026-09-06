export const name="goggles-thin";
export const id="dl_10bf1ef868e54aec8923";
export const url=new URL("../icons/goggles-thin.svg?v=e151cb7bf1a1ee3553f3b0e5882e7a866ae759f949b2b5d027ed46852da85e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
