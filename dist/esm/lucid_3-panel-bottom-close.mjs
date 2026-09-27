export const name="lucid_3-panel-bottom-close";
export const id="dl_9d3f9cbac47b4e749b67";
export const url=new URL("../icons/lucid_3-panel-bottom-close.svg?v=54203e37fc72cf306f28eede9ae0f59e63c7347ef9a75a796a95ae9e9b0d0e41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
