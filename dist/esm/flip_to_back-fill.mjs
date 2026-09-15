export const name="flip_to_back-fill";
export const id="dl_a91a875edc9a475bbd13";
export const url=new URL("../icons/F/flip_to_back-fill.svg?v=171172d52ab1409d763b1b32e6c931acac43f78d13d2830d5bbc15f8eabff840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
