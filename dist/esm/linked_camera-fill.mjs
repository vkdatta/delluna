export const name="linked_camera-fill";
export const id="dl_cfcd1e55f5cb4a0138a7";
export const url=new URL("../icons/linked_camera-fill.svg?v=a4c4fa8143db42b3425b82472bd7efd776e616c5d94fc7bd0bd028e335df7184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
