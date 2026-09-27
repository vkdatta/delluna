export const name="width_full-fill";
export const id="dl_a2cee905dae5fb406eb8";
export const url=new URL("../icons/width_full-fill.svg?v=25e5c5f4f98c6ff06ed4d3388da991a9c9b87313c804cdd8061b6c51c4f199dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
