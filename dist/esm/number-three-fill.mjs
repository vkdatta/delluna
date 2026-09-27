export const name="number-three-fill";
export const id="dl_2c3b5e8a63ca413db39e";
export const url=new URL("../icons/number-three-fill.svg?v=517250afae111a30f2b1adf455bd8be4434080b3d7c1be443b158cb6ee82c3f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
