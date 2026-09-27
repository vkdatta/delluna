export const name="fluid-fill";
export const id="dl_8f32ca0b738d4eef22b4";
export const url=new URL("../icons/fluid-fill.svg?v=920449301b6c157b80cb59ce1ed57b404b1978fc6f0ab1beff811515608cbcbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
