export const name="3k";
export const id="dl_f6c17822622011975322";
export const url=new URL("../icons/3k.svg?v=57451cd1e036dc3ea0abe5eb5fa0244a1521229b94f9eab591ffaab8e9516360",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
