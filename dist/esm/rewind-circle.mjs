export const name="rewind-circle";
export const id="dl_04e5f7338f0b482fa58e";
export const url=new URL("../icons/rewind-circle.svg?v=8f8385357757f6f2ebba2782d80153b10594c075edcd7994abbae0fe18de6684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
