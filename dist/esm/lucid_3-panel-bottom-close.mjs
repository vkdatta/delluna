export const name="lucid_3-panel-bottom-close";
export const id="dl_9d3f9cbac47b4e749b67";
export const url=new URL("../icons/lucid_3-panel-bottom-close.svg?v=9a7cce5d6ae1cbd486561588edb0f899f57bcea1e8823b2b34b2028159741625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
