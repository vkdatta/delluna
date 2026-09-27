export const name="wifi-medium-duotone";
export const id="dl_7c69003ae795cc5c604a";
export const url=new URL("../icons/wifi-medium-duotone.svg?v=f8b469e40434083e17fef69c9969c8952ed2d3c3b6f5aabcc5c6eaf93a533966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
