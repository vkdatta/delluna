export const name="open-ai-logo-duotone";
export const id="dl_f2ea889c751249ec8e92";
export const url=new URL("../icons/open-ai-logo-duotone.svg?v=4923a02f73ffd7877f17ea6fc3ce4847507570667b51c4bb4cc6ea614c7a9c0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
