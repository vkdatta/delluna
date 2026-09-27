export const name="enhanced_encryption";
export const id="dl_6cbbdf6fd92b0dc4b90e";
export const url=new URL("../icons/enhanced_encryption.svg?v=44f4f18789ac5511e73726167bcb1430bd5786dffa53f318cfd73162c1cea9df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
