export const name="intersect-three-light";
export const id="dl_9fc235f932534f4d8ef6";
export const url=new URL("../icons/intersect-three-light.svg?v=1fb6fb541828731adcdc5d78211a1d688c7de4249f6a9ff00da7c4805a28e5f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
