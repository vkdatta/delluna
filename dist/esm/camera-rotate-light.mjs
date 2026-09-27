export const name="camera-rotate-light";
export const id="dl_1b9c886d4e3d4d96b072";
export const url=new URL("../icons/camera-rotate-light.svg?v=d76397b925d58f6abc637ef021ff182d5eff1071d5d8af4b02c0508edf824423",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
