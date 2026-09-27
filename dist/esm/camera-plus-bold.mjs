export const name="camera-plus-bold";
export const id="dl_631c0127b7684cb48ef2";
export const url=new URL("../icons/camera-plus-bold.svg?v=8f90f1c026e9a462d256eb3b126b6d78a2caa8de05839e83c05c12327f080201",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
