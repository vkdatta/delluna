export const name="arrow-elbow-left-up-bold";
export const id="dl_c144124b9e9d48fdad58";
export const url=new URL("../icons/arrow-elbow-left-up-bold.svg?v=addb245c28cd2b09747b190571b71f370e4029bcb93cb6e88531abb60431c24d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
