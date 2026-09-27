export const name="sparkle-bold";
export const id="dl_ad8e48f33be6bad5b6db";
export const url=new URL("../icons/sparkle-bold.svg?v=5ee0f80b2f586bc47f5d0f8a029fe2f80e439729b88de3796098b4752bdb4d79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
