export const name="stairs";
export const id="dl_3d30cbb9ea0641f71ea3";
export const url=new URL("../icons/stairs.svg?v=fe9d80cea41eaddf26458240985c958f6ec1dc7c45f5e8e80253e073118f44b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
