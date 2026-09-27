export const name="moon_stars-fill";
export const id="dl_bd579a68fd52b79b08af";
export const url=new URL("../icons/moon_stars-fill.svg?v=c55c61198a46a4aef59f60ddc267db05cedc0d1abcd3aba21ad5cf5261456ed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
