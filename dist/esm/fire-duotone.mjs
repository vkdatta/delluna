export const name="fire-duotone";
export const id="dl_898ecd37c9274e0b8c4a";
export const url=new URL("../icons/fire-duotone.svg?v=ec3b3d701a293918474edcb7a77c6be2cee302538653385de6111a395898fc77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
