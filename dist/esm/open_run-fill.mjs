export const name="open_run-fill";
export const id="dl_9457314066a884e77b6c";
export const url=new URL("../icons/open_run-fill.svg?v=098b7b0c9cd268ba0d08b8d08b7893ae5bf8eb439f3aea08578d460361ff095b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
