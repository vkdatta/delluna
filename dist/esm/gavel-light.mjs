export const name="gavel-light";
export const id="dl_940988ee598d4d7aa7d2";
export const url=new URL("../icons/gavel-light.svg?v=ec4399924c1c0723a648515c3fc2170e6187681912c84e9313c2a108744e9d85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
