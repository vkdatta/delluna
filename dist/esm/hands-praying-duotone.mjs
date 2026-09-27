export const name="hands-praying-duotone";
export const id="dl_3bda0eb30baa4e49a4d8";
export const url=new URL("../icons/hands-praying-duotone.svg?v=31042d6dd4ccc8d3d48252de09099746f03fe81e53027c968c6a1852e95a64ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
