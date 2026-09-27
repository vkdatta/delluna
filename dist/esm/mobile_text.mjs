export const name="mobile_text";
export const id="dl_d1d885a8cc49cc19327a";
export const url=new URL("../icons/mobile_text.svg?v=fa5cf4c8139885af07543ef1c29624181fd6e858f7a9c3bc31ce433bd310d85c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
