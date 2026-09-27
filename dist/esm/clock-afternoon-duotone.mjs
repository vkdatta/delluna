export const name="clock-afternoon-duotone";
export const id="dl_3d35ee5329b24f77874a";
export const url=new URL("../icons/clock-afternoon-duotone.svg?v=fa07337c51e04b751afdcc2d60fe141585b9a9e0f1104b277b9fb70ea9cd29c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
