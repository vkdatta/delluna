export const name="funnel";
export const id="dl_98638a512ed84237bcf7";
export const url=new URL("../icons/funnel.svg?v=755f43f7447600b063cbc9ae474422e1109a6ec6ec54ff6097223c0997664b0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
