export const name="mobile_code";
export const id="dl_5f7f763b37fd43a109ea";
export const url=new URL("../icons/mobile_code.svg?v=6d98085f1beae9330193320eef5a86d70c7aeb393d4e199fcaff6293d0dee75c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
