export const name="drafts-fill";
export const id="dl_e2b7c613b29e70924a92";
export const url=new URL("../icons/drafts-fill.svg?v=96ec75418398e6869a8000dc5a3ca3d91dbcbef749868fca458a7f592d5440d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
