export const name="dots-six-light";
export const id="dl_b0126d38f0b649998371";
export const url=new URL("../icons/dots-six-light.svg?v=85230a1827573ee61ab2884b8b3637eca2edb0d1859d90076577d8b96bd3d603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
