export const name="funnel-duotone";
export const id="dl_914ae9aaf60a4418922a";
export const url=new URL("../icons/funnel-duotone.svg?v=ba1eb55b4d6abd28131ac98dc5269957291f76d09ed3de4eef78c21c8cf73bb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
