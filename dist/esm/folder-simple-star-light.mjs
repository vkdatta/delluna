export const name="folder-simple-star-light";
export const id="dl_a3373c2c0ac64d63b69e";
export const url=new URL("../icons/folder-simple-star-light.svg?v=bf4c66c9469194cbc2e386e8582870e0ccd87754f16a0bc485277d4aee7fb3ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
