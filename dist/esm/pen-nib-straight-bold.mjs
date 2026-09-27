export const name="pen-nib-straight-bold";
export const id="dl_5976d4dec2a74c0e9774";
export const url=new URL("../icons/pen-nib-straight-bold.svg?v=7d8184c21639ae73c55c55952052a717bcc5a13c3b886d458efec53ad51c9e91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
