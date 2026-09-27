export const name="difference-fill";
export const id="dl_765f74dfdf4eda9243b0";
export const url=new URL("../icons/difference-fill.svg?v=e45e5c4bb43be890bedbd68504da06633d47550081838bf007e3d1bc540816f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
