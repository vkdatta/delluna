export const name="device-mobile-camera-bold";
export const id="dl_59c492dc61544b4fbbc2";
export const url=new URL("../icons/device-mobile-camera-bold.svg?v=a1b12c4aee189acf02899895b6e1dc8b9ae590278091737ec878f98671a0aaca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
