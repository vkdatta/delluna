export const name="device-tablet-speaker-fill";
export const id="dl_69647331657b4630a94b";
export const url=new URL("../icons/device-tablet-speaker-fill.svg?v=a4015f9cc89e470bf30321a9e53ebd51485e847dfe066a9043dedefd3771ec9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
