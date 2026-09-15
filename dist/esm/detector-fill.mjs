export const name="detector-fill";
export const id="dl_d09ad5a9083942efa716";
export const url=new URL("../icons/D/detector-fill.svg?v=34ef0c6f98e71563773a4c24ef0464e189632cd78b30d0fcc3ff0c7206242bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
