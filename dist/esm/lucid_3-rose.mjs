export const name="lucid_3-rose";
export const id="dl_94adbab717014cb0a3cf";
export const url=new URL("../icons/lucid_3-rose.svg?v=7c5c5c8395598df2384a6d477678f52d8a10939b701f75ab0164a5f25582f556",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
