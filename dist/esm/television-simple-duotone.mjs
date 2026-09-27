export const name="television-simple-duotone";
export const id="dl_697476e4e35f4e253c3c";
export const url=new URL("../icons/television-simple-duotone.svg?v=ee0c509db9d3c63cf16f702efdfa9b836969f26aaef00db587d195b7ea051781",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
