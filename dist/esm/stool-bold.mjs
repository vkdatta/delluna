export const name="stool-bold";
export const id="dl_93220e4b092e9d103602";
export const url=new URL("../icons/stool-bold.svg?v=59e35ea63e01adfa8bb617724de582abc220d513449745575e013af128f19c44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
