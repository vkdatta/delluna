export const name="funnel-duotone";
export const id="dl_914ae9aaf60a4418922a";
export const url=new URL("../icons/funnel-duotone.svg?v=13038d45230b89552b6ae480141f9357d9cc808aa655c164aec3c83ee1136afb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
