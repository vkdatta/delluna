export const name="file-css-bold";
export const id="dl_34566d2d49234c4aa954";
export const url=new URL("../icons/file-css-bold.svg?v=92f9c08680561ceed2b7e9fae91d95bb05c05cba3f230e9d4557f2d02a3b1f50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
