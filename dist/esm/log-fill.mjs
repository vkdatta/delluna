export const name="log-fill";
export const id="dl_3178847851fb4147abe3";
export const url=new URL("../icons/log-fill.svg?v=bf6ceb486af388d5a9ff370ebed11d14e9a1f82f91408e25b047bd0f43fb8d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
