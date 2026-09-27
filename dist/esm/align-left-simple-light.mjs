export const name="align-left-simple-light";
export const id="dl_17bb2d2be8e44f278688";
export const url=new URL("../icons/align-left-simple-light.svg?v=1d8c880e6152777045921f30e8c84854f0d60974c894c4a3cb54f3ea81e49e0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
