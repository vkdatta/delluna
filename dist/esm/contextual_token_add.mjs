export const name="contextual_token_add";
export const id="dl_5cf02b1d397bc261f6d2";
export const url=new URL("../icons/contextual_token_add.svg?v=ad724c40468faf78c33480d2403c79a0842af332d805c7c6137074bcb0cfe930",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
