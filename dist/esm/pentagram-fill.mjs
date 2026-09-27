export const name="pentagram-fill";
export const id="dl_50716e029be74916a72a";
export const url=new URL("../icons/pentagram-fill.svg?v=71faa69902300d78a6319af9d13eb513d222abc9976a26fdebfd80aefd7c5d8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
