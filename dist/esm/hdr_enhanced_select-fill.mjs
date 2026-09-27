export const name="hdr_enhanced_select-fill";
export const id="dl_9a487aebcbe95571188e";
export const url=new URL("../icons/hdr_enhanced_select-fill.svg?v=aaa8e51ba6f6054d493e3f764bc87e0d66d24937805f5abfb4a61383d52e7ec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
