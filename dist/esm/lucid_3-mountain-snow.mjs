export const name="lucid_3-mountain-snow";
export const id="dl_78dfd9f7651c42f5add0";
export const url=new URL("../icons/lucid_3-mountain-snow.svg?v=47ea1c5089a68c1ba93136ce8ba49fdbd71e5db94f62f64fdafde186f952990f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
