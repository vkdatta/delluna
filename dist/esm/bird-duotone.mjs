export const name="bird-duotone";
export const id="dl_eda15abf3ace4f849dc1";
export const url=new URL("../icons/bird-duotone.svg?v=776a1f85d0cf93c3fe5c96bf38da99ed43208a0bdaad51a45d1a603ac59d09db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
