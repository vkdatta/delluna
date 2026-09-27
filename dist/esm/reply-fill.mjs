export const name="reply-fill";
export const id="dl_d8d685f05c77561a2ef4";
export const url=new URL("../icons/reply-fill.svg?v=f593386d562773477f21f43bba65a595e4b0047dcddd5a90a84ffdbf35bf0665",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
