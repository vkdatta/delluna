export const name="turn_sharp_left";
export const id="dl_aba0d91a662e5bb006d2";
export const url=new URL("../icons/turn_sharp_left.svg?v=ee76cd5d25797c37f4d320764f9ad35eb4ee92c60678ea2bc5d4a0ff649ff7ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
