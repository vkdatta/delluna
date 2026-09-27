export const name="sidebar-simple-thin";
export const id="dl_078f28b0d74f8fa7530e";
export const url=new URL("../icons/sidebar-simple-thin.svg?v=d2aebbae2e762d452289a77e7ee36a3e2f9942fe2276d9ce8c52f7c41a0e2d27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
