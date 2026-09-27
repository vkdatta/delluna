export const name="microwave_gen-fill";
export const id="dl_0f0f5b3c385c2d6e7365";
export const url=new URL("../icons/microwave_gen-fill.svg?v=431f01d8d27940a6603a663a065f296b66b9b974e48b89e615f3652edde2be44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
