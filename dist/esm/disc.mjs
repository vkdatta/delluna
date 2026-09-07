export const name="disc";
export const id="dl_74d94723aae64d23b837";
export const url=new URL("../icons/disc.svg?v=3d9b64f3b0e47c89af963cc0373d31416435b4f7970b6b7c12d12c3911f3576d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
