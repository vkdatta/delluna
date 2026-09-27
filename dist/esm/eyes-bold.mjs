export const name="eyes-bold";
export const id="dl_b894651ee73649fe85dc";
export const url=new URL("../icons/eyes-bold.svg?v=31d0cf2fff46e1a4a55f0e341018dac8ef486f90b90eab2e377dc4492ad643d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
