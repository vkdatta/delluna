export const name="handshake-thin";
export const id="dl_299844ef8b3547bdae3e";
export const url=new URL("../icons/handshake-thin.svg?v=097ec1f0902315842399f707dd0f35a8a79517a264d15711cd22a41c29bcb6bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
