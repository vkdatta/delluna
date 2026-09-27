export const name="fiber_manual_record-fill";
export const id="dl_48a7e9e50135df310f70";
export const url=new URL("../icons/fiber_manual_record-fill.svg?v=4d4ff2a983c41f010eae9241d1aaeda8f507dea7a147b047e2bd6828093e3da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
