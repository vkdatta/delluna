export const name="pen-nib-duotone";
export const id="dl_46cce5d84e4b4e339806";
export const url=new URL("../icons/pen-nib-duotone.svg?v=c142d8ac8cb8de4161e3e70f0317bd76f75c9b6e9556723cfb9b1a3a89acfb08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
