export const name="elevator-light";
export const id="dl_854a3e3c2c30439ca3db";
export const url=new URL("../icons/elevator-light.svg?v=5b1795a7bdee278fe4052ba70950ae6a13234a93189aa9dd3b8349753ef35394",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
