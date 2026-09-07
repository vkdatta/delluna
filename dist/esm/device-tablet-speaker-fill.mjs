export const name="device-tablet-speaker-fill";
export const id="dl_69647331657b4630a94b";
export const url=new URL("../icons/device-tablet-speaker-fill.svg?v=244a592e8307189497e602d6506b99103ead236114228917d001f8f163f22775",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
