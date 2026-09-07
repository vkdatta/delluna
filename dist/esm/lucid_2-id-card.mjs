export const name="lucid_2-id-card";
export const id="dl_9ffffb4d4be44ded8b7b";
export const url=new URL("../icons/lucid_2-id-card.svg?v=4973b3bfa7786f782fca3165aead927ecde031136eeb4de6cdcde6a959914e77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
