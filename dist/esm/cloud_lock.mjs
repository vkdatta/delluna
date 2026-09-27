export const name="cloud_lock";
export const id="dl_5d459d42ccc3bacaf03b";
export const url=new URL("../icons/cloud_lock.svg?v=e8a920f4a76f8fe53379a4f4a75c393ca1be72f9c4e99175f20cbe2fa751f779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
