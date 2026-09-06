export const name="bulldozer-fill";
export const id="dl_5bafb4f74db9407c92b3";
export const url=new URL("../icons/bulldozer-fill.svg?v=889ca0db4fd13f2d03fa620005ed5bbc9670c57284c9fddfe71adf492a7e6a3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
