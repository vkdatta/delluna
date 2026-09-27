export const name="microwave_gen";
export const id="dl_a58294f973ab230fe15a";
export const url=new URL("../icons/microwave_gen.svg?v=562e64d8bc594f86d9516da8821dca14091acb1f1e2c1207c51873b882e20825",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
