export const name="seal-percent-light";
export const id="dl_f729af26d2e77543614a";
export const url=new URL("../icons/seal-percent-light.svg?v=8109d0f5b88e35a71b75fd2ee09ebf71865adf281ed25e74892ee3d3da16dbcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
