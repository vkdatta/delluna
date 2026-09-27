export const name="crop_21_9-fill";
export const id="dl_2a3b6a8f0ddb2f72c6dc";
export const url=new URL("../icons/crop_21_9-fill.svg?v=a2c57e50ca292037f6360d1c8462a1b34d25e5e96615ad997c6842ab0c7d6098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
