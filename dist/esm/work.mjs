export const name="work";
export const id="dl_ff22af129253b8650392";
export const url=new URL("../icons/work.svg?v=5a7f5dee75b213563c5122c701ca518bdc3c3a3c8278023fab8f655bb52814b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
