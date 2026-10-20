export const name="magnet";
export const id="dl_8dc8a0c0b3fc4f48b4ea";
export const url=new URL("../icons/magnet.svg?v=734a478dc5c6bcf91ec1cdce545bc946b457dfaee4a1cc33483277060ef5d3c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
