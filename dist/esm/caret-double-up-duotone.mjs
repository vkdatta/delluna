export const name="caret-double-up-duotone";
export const id="dl_65d567bfc22f456996d4";
export const url=new URL("../icons/caret-double-up-duotone.svg?v=76f973b9970d3392336b2880eec9799f915f8b7c6366ff3a308d49741de227f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
