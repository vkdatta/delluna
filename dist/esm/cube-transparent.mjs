export const name="cube-transparent";
export const id="dl_a4a5980ab15b429b9901";
export const url=new URL("../icons/cube-transparent.svg?v=c5339544c37ee621dcf4b3343757c2302f4a4824683a1c11cfd618f2e12ddc6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
