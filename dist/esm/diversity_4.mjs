export const name="diversity_4";
export const id="dl_ec7c4ee8d7c3e3d4bbfa";
export const url=new URL("../icons/diversity_4.svg?v=0d952f6df7c7f6c66127d5b0f9bb91ceab73dbe5ee48c7d3257ceb3f90b87d11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
