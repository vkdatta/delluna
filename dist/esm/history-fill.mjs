export const name="history-fill";
export const id="dl_202f8cb62baa4d4eb9ca";
export const url=new URL("../icons/H/history-fill.svg?v=da9d54de7bb88c58d3db5369cdd30e70854e7a6f7c89757cfb5cae357d911e67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
