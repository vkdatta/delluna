export const name="6k_plus-fill";
export const id="dl_67a7c39197e6d06f4f92";
export const url=new URL("../icons/6k_plus-fill.svg?v=df6870da5ae90c746bcaa91789a221e170f2d391da13694d92bf94cff8ba2f17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
