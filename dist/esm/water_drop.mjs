export const name="water_drop";
export const id="dl_5d36bfc7f0f24a94f283";
export const url=new URL("../icons/water_drop.svg?v=272d73531e35ebb9816a7d47b158b3ac575be8f821bed8b60cfff4e4c86f408b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
