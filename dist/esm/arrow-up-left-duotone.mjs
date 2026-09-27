export const name="arrow-up-left-duotone";
export const id="dl_aefdf8c2cbc440f4b85f";
export const url=new URL("../icons/arrow-up-left-duotone.svg?v=569a0ac86f049b2e52d3d17b563a8dacff925b26a9814556a58378a52ba3c702",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
