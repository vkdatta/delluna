export const name="whatshot-fill";
export const id="dl_7c3a00d9ba43761699d1";
export const url=new URL("../icons/whatshot-fill.svg?v=5292242491837499a978c70305ac6b72e6a755cabffea86b0612e64662d834d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
