export const name="camera";
export const id="dl_c61838e1974348d1bcb9";
export const url=new URL("../icons/camera.svg?v=c0198009487d2e2a75c26b05689ba40b22b04f6bc5c46a3abe68a9c628edd569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
