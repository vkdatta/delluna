export const name="hair-dryer-light";
export const id="dl_c892a51b3adc4bb0b2dc";
export const url=new URL("../icons/hair-dryer-light.svg?v=5ce7238e6c65b3634082a46d1c3a3e9868847c767263f2edaeaaf789693ae542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
