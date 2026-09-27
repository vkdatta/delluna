export const name="panorama-duotone";
export const id="dl_a2bfc6cef5bb4ea09fa3";
export const url=new URL("../icons/panorama-duotone.svg?v=a4a54e3dfdbe5ff4afe186eecf08cd2776f0ed7c4a45b6551cf5e152d3ff5ef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
