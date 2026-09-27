export const name="folder_shared";
export const id="dl_340b06413c5ac174208b";
export const url=new URL("../icons/folder_shared.svg?v=c9501de03684bb91f4da38da6037e923faca72490048a1f7ec1e5f893ab70d86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
