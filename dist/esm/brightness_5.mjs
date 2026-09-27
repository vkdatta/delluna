export const name="brightness_5";
export const id="dl_0f273deaa934518949d0";
export const url=new URL("../icons/brightness_5.svg?v=1075e8613833dd3f657c8173785e1d3a718b6739255bb7c22a9dc6451b0d2951",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
