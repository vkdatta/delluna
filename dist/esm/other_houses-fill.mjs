export const name="other_houses-fill";
export const id="dl_0443e915a3e930880f5f";
export const url=new URL("../icons/other_houses-fill.svg?v=a9d8cd9c83dacdac612b327a28ccecae152cad95936c807e41d5cb882e9f8729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
