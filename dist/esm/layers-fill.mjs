export const name="layers-fill";
export const id="dl_9c7936fb8a96d0c23449";
export const url=new URL("../icons/layers-fill.svg?v=32b874327c1dc8edc3a6c7e943d034ff4a3de6d39eb6b56ca2833a264c1fc9b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
