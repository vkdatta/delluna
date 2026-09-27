export const name="option-bold";
export const id="dl_28137dc0154640a4a563";
export const url=new URL("../icons/option-bold.svg?v=f1bc555dd8eafb46e8d17521433f68e7c8c2936165e4197af7c509d3fe38ff21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
