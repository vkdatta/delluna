export const name="lucid_3-server-cog";
export const id="dl_01aa965cc8f64000a505";
export const url=new URL("../icons/lucid_3-server-cog.svg?v=e82183648b1a641462e190b3528386d6997be9fa3e52ad76f4cc8a42544dc37d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
