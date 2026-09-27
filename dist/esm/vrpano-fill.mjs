export const name="vrpano-fill";
export const id="dl_c55cba8d9a2a746467a2";
export const url=new URL("../icons/vrpano-fill.svg?v=a43047213ad0b053e5c521a6ddf346db8f6a0539db3baca51c8b3b0f4d01544c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
