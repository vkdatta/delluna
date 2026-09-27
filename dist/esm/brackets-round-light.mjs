export const name="brackets-round-light";
export const id="dl_b27f1d56d6324e8ab335";
export const url=new URL("../icons/brackets-round-light.svg?v=7427e49be8862c4ece8a4311c2a23217ca722fefc040636b8d4559cdb94591d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
