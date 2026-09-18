export const name="mobile_share_stack-fill";
export const id="dl_77de9648ee954512bccf";
export const url=new URL("../icons/mobile_share_stack-fill.svg?v=3b7d00af1683c8627b71b5f41c81ef8faca416b6c9264e7a3ac4ba9cd12ca65b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
