export const name="local_library-fill";
export const id="dl_98e3e09e30a26c14c7d9";
export const url=new URL("../icons/local_library-fill.svg?v=6789cd15f37a74eda72581b457cc0b2716fd1493cc52fa7fca2625777d4f3e1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
