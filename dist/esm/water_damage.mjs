export const name="water_damage";
export const id="dl_10bcee01efbd7ad7c3fd";
export const url=new URL("../icons/water_damage.svg?v=6a5c4bf8ad8a00962b6174b1cdc82e847698c93f8dd64c479c4861e9115ae58d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
