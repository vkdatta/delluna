export const name="biotech-fill";
export const id="dl_9d9a7c55d75c7b04f399";
export const url=new URL("../icons/biotech-fill.svg?v=157b9d404c0af070540689c23354393e8fdd0c8a20cc880ce49400b657381225",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
