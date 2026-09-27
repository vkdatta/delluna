export const name="sliders-duotone";
export const id="dl_1fc356d273b532d9aad2";
export const url=new URL("../icons/sliders-duotone.svg?v=a3fc9848fe0cb1a0664da507c6231b03df682a9fd4428ba525fb062630dfc25b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
