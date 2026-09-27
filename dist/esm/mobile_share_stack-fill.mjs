export const name="mobile_share_stack-fill";
export const id="dl_f7cd8be4bb0484ff44df";
export const url=new URL("../icons/mobile_share_stack-fill.svg?v=6b2f411751bef6ad23b895fbd1189bd215629435e616b6a4f7e88803f31e1141",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
