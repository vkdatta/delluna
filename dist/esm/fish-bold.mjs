export const name="fish-bold";
export const id="dl_418b4ef4ff6846ecb5a5";
export const url=new URL("../icons/fish-bold.svg?v=d6b2159b48db1227c9ab4575c04499d8d759183ca82ceb4c3e3d2eae62710e86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
