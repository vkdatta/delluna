export const name="file-audio-bold";
export const id="dl_fd9fb4d30c6a44d29f07";
export const url=new URL("../icons/file-audio-bold.svg?v=e6630e12f67ad18d108f1f984f6301c772f8d42a534f16f4356c4f90a55ff37d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
