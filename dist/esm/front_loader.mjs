export const name="front_loader";
export const id="dl_fc642281d478438b34ed";
export const url=new URL("../icons/front_loader.svg?v=1182689d0ab348f89393da7c75f5e7faaef1d84d39dedd52dc47b536b659a8e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
