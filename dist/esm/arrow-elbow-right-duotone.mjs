export const name="arrow-elbow-right-duotone";
export const id="dl_ec5ee90e76a946129fe4";
export const url=new URL("../icons/arrow-elbow-right-duotone.svg?v=eab334f21b248cc01e36bfca5d423c252092b6bb253597cb5aca02c30c55a735",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
