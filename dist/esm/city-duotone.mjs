export const name="city-duotone";
export const id="dl_f592ae4b81f047f2bd67";
export const url=new URL("../icons/city-duotone.svg?v=204836d1ead67c5ca122d4ab6d5ab7d2ba4ee64174dae31157c14e3d2e5421c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
