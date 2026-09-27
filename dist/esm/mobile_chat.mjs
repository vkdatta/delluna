export const name="mobile_chat";
export const id="dl_92b40d84a7b023e57151";
export const url=new URL("../icons/mobile_chat.svg?v=952367908f7383788e28da737099f3e2cf16ddcc4d9b1e101ac61c142e6d90f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
