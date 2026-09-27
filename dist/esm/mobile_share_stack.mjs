export const name="mobile_share_stack";
export const id="dl_df90d9ec5c0802f35c41";
export const url=new URL("../icons/mobile_share_stack.svg?v=dd452dc86e469483313679f211a21872f079258ac481991add09e5b26cf7c4f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
