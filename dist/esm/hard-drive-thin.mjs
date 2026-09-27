export const name="hard-drive-thin";
export const id="dl_b828dce2a9734ea4ab10";
export const url=new URL("../icons/hard-drive-thin.svg?v=4ce2ec71729103d63aba2341aaf30209673114c9bbf733582e77746fef7467d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
