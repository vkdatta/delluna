export const name="dock_to_right";
export const id="dl_e548eb1da3d1dcfb0da5";
export const url=new URL("../icons/dock_to_right.svg?v=6a6e6103d0f8b40f368f6ed366bb671e193e3d72c0f2678f327330908772f1a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
