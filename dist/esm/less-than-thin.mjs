export const name="less-than-thin";
export const id="dl_d0fdfc6515434daca882";
export const url=new URL("../icons/less-than-thin.svg?v=9cd1da993a50266be30bf4191cd4db3005deb2375da667205d0f111a763865e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
