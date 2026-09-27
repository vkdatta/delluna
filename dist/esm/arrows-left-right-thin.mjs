export const name="arrows-left-right-thin";
export const id="dl_65ce1e20c6d44018bf7f";
export const url=new URL("../icons/arrows-left-right-thin.svg?v=1d661fd287b2b7c01a30f9e692e09aa82a6a52c5de6cbfd77970a3b1a8c385a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
