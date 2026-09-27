export const name="free_cancellation";
export const id="dl_795626e6d856ed50036c";
export const url=new URL("../icons/free_cancellation.svg?v=d68fbc20623f13c6b619adeba238497454228f8b5367f7295ae818445b9c3349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
