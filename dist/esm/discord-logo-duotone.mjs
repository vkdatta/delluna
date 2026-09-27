export const name="discord-logo-duotone";
export const id="dl_2480c70e17e74210bd5f";
export const url=new URL("../icons/discord-logo-duotone.svg?v=9ebfcfd1d5bcf2a2115be520a8ab0fa410fdab8a0dc6efae87f434614f39c22e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
