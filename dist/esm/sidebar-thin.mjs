export const name="sidebar-thin";
export const id="dl_633ce6b6bd1d03962c34";
export const url=new URL("../icons/sidebar-thin.svg?v=62b707773a8238458f43ae1371af32ac2ee35674f283aa02398f5aa0042a2f2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
