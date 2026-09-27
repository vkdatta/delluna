export const name="ear-light";
export const id="dl_b860f6366d3d49afb014";
export const url=new URL("../icons/ear-light.svg?v=50b9c873f70d367ad5f8537d1dc80f836627d2014fd22afb49b63e5cdafb658b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
