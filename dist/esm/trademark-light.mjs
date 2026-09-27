export const name="trademark-light";
export const id="dl_0eb4309297e6eea89be3";
export const url=new URL("../icons/trademark-light.svg?v=60f4e147d9ec42cbe996cf1cbf63f01a3b518c05f574e26efdaacdc593cc9b02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
