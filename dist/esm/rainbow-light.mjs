export const name="rainbow-light";
export const id="dl_0d779a327de04401898b";
export const url=new URL("../icons/rainbow-light.svg?v=717e0f3641bada35cad7ec6375a5feee97a894c47434bd3630851fd971441ac3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
