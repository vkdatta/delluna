export const name="cat-light";
export const id="dl_97fa51b4d55f4e81ab62";
export const url=new URL("../icons/cat-light.svg?v=9e2d1b8bf838bdf7689df3be8a290fccc707e224c744b09e28aa4614a926cdb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
