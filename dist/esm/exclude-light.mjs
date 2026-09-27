export const name="exclude-light";
export const id="dl_5270f740305146c4b3fb";
export const url=new URL("../icons/exclude-light.svg?v=b579ca9d3d1d8fdc99cd6cdb6fb35c7ba4b32ec812838f7cf5f686f58d0b466a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
