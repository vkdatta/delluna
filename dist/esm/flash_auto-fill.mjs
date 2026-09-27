export const name="flash_auto-fill";
export const id="dl_06041686292d2a6f3fe1";
export const url=new URL("../icons/flash_auto-fill.svg?v=a826d0e55ff977cf46168dd1f626b0bbc777fe848ec7ad455aad30ea9d058403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
