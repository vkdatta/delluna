export const name="thumbs-up-bold";
export const id="dl_35bea04bb92b56054783";
export const url=new URL("../icons/thumbs-up-bold.svg?v=ea107b5726e132620eb48701c3b979421c771bf7962844eefa3522886e4528c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
