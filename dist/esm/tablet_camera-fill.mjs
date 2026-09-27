export const name="tablet_camera-fill";
export const id="dl_f0fd7cc3260b1bc7255a";
export const url=new URL("../icons/tablet_camera-fill.svg?v=d75ab39a34fcbfa11ef970ee4fcda34c2a0b311b450b81259b25d51350052ffa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
