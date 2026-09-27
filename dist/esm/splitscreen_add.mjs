export const name="splitscreen_add";
export const id="dl_7ff188945401d375ecdd";
export const url=new URL("../icons/splitscreen_add.svg?v=8a3860cdc7b38e1fe16b1cd3478a8d4d214f2c2991ce4df72e621b8cfe612ddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
