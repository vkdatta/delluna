export const name="line-segment-light";
export const id="dl_0889f8d778c449fab5bb";
export const url=new URL("../icons/line-segment-light.svg?v=eebf5f38325dd60b648a82d8fe0f730255fa8f4f0c99b05375b4e6cf88994fc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
