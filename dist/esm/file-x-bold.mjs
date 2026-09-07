export const name="file-x-bold";
export const id="dl_c4d6bc03e6614d2d80bd";
export const url=new URL("../icons/file-x-bold.svg?v=755340e7f6cec9ec6a9739ff1a168dde7d03d2b43316abf21b1016fec9a72a21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
