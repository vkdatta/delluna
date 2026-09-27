export const name="device-tablet-camera-duotone";
export const id="dl_6158793358b14038a701";
export const url=new URL("../icons/device-tablet-camera-duotone.svg?v=19eaee347f9faaace36bcde613d166e61bfc1c3e530988f606603a16d0c4178f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
