export const name="file-audio-light";
export const id="dl_64cb410be7cd44248341";
export const url=new URL("../icons/file-audio-light.svg?v=b2e6ad9cc43b0245912634541c64440a12c2a30a7c12564e2b710ffda9cbd8c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
