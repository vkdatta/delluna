export const name="whatsapp-logo-duotone";
export const id="dl_1ca6c43f5a5ec9ce3eea";
export const url=new URL("../icons/whatsapp-logo-duotone.svg?v=e8bb9b614e27ac796e9a7ac618df75a0877f2f8191f4cd3dd6f28234c7c05455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
