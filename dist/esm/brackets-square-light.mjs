export const name="brackets-square-light";
export const id="dl_d84a27d993cb479e9a46";
export const url=new URL("../icons/brackets-square-light.svg?v=1a48c82f42ce030013def05f34236531b948707745c75fecbe03576bddb48fb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
