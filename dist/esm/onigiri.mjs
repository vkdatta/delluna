export const name="onigiri";
export const id="dl_8601162bfd0c40c18bbe";
export const url=new URL("../icons/onigiri.svg?v=0c1f34b7396d3d70cfce7b3185665d75ec8951248bf669b016107c568c41f256",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
