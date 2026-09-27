export const name="replit-logo-light";
export const id="dl_c6ad0fecf5b24a6596ef";
export const url=new URL("../icons/replit-logo-light.svg?v=2783ef57735366cda542eb1b868a65803478c3d6c90bf221fb54c881bd2d94bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
