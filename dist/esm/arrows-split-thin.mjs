export const name="arrows-split-thin";
export const id="dl_c58ccc58b3be4471846c";
export const url=new URL("../icons/arrows-split-thin.svg?v=150394f7da5aed6385c14d57aec40e5473a913fa521cb7632d3d3b4f6aa90a28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
