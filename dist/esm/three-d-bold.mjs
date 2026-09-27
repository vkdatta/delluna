export const name="three-d-bold";
export const id="dl_e172ea1a49f6b49b46be";
export const url=new URL("../icons/three-d-bold.svg?v=97123f7201fed735d413babbb917924001652631d6341a8064c111014be60957",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
