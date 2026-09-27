export const name="video-conference-duotone";
export const id="dl_f5b0f27744bfe7694a53";
export const url=new URL("../icons/video-conference-duotone.svg?v=3e46852e6f3d05ecec73a8dc19a32167fa2b2bfe8bfb73d74aaac0b5d9969be2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
