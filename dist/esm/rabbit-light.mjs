export const name="rabbit-light";
export const id="dl_c8ffb35eecc245ddafbb";
export const url=new URL("../icons/rabbit-light.svg?v=4d7de6ced34448782a58b08af0ad23722d7cf3dbe60338ece2d21b2ce74478ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
