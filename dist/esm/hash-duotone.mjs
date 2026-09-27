export const name="hash-duotone";
export const id="dl_40be942ffd3d4fd48c0a";
export const url=new URL("../icons/hash-duotone.svg?v=9734dda85e05bc2ca4f0544aa3670d446711671f1679e08fad13eda8da6fcfad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
