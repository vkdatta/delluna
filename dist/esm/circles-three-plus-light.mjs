export const name="circles-three-plus-light";
export const id="dl_bf88a26e90374fdaa8be";
export const url=new URL("../icons/circles-three-plus-light.svg?v=262fc7d3490feb326d79f66c472ae3ffee0a6d08cef05ddf16fd52833521716f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
