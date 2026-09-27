export const name="hardware-fill";
export const id="dl_7f96b32401f5a2f37500";
export const url=new URL("../icons/hardware-fill.svg?v=f5d66efa9fe6b94e55474c009f06062df556f593d23bed802a51c5e337f1e10c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
