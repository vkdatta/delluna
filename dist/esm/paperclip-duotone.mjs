export const name="paperclip-duotone";
export const id="dl_475a0c9867db4b25b074";
export const url=new URL("../icons/paperclip-duotone.svg?v=e299b5de390fe333525003e600c8333fedb68235dfcdd909da9227597ce1f042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
