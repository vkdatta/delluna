export const name="lucid_1-captions";
export const id="dl_31ec37c7ed8946698794";
export const url=new URL("../icons/lucid_1-captions.svg?v=c581d230080789209fbbb3efd11c2c38ae614331bf29277e0957159f0b3a2d20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
