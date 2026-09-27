export const name="fish-simple-duotone";
export const id="dl_67053b0aa725421f8e78";
export const url=new URL("../icons/fish-simple-duotone.svg?v=a2c145785c38a3441474f8adbb5a87a5ecaab5824198e6e31a4c3d17f444da55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
