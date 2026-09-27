export const name="sliders-bold";
export const id="dl_0c82c2255de39814e622";
export const url=new URL("../icons/sliders-bold.svg?v=b43b4df2dde0989aaa3eaa5aa1276fa5f12d476e2e5c2bc2a7609c3ec5fbf24a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
