export const name="charging-station";
export const id="dl_e3ce3fdab553487591aa";
export const url=new URL("../icons/charging-station.svg?v=2bfb435eb07c6facd40bb93313af561e7302e73e0470e3f140963a993787cdfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
