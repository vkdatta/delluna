export const name="placeholder-fill";
export const id="dl_a1cfe2f71b4d48309253";
export const url=new URL("../icons/placeholder-fill.svg?v=ddcf78734d3485f65e477cc30b12b480844703963141f8e50cf7384fe6367a1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
