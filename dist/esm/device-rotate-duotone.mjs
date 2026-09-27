export const name="device-rotate-duotone";
export const id="dl_2f2a8c502dcf4075834e";
export const url=new URL("../icons/device-rotate-duotone.svg?v=c81e542fcf73c19da05d12146aa1b06f3d8a43271010732922bd65c0717e5b1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
