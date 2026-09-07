export const name="lock-simple-duotone";
export const id="dl_4275c921040247b9912c";
export const url=new URL("../icons/lock-simple-duotone.svg?v=dc8b03c555d84979c716429f5f583ee34304104e8a7b1e17bc2838c01a11d9e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
