export const name="arrow-arc-right";
export const id="dl_e05d0a8434d442a4b62d";
export const url=new URL("../icons/arrow-arc-right.svg?v=0ae3b834d3bed4026ba3fe39a3f79bf5113ff5a8cca08f4000840c495e6c3f2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
