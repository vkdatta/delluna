export const name="20mp";
export const id="dl_ff4089647555a0cdf348";
export const url=new URL("../icons/20mp.svg?v=02454d7cc42cc490c88b29a2a45e2b58d05c9b05a315282a37aec4b76d30d101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
