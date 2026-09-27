export const name="browsers-bold";
export const id="dl_e3d59ffb033c43b38501";
export const url=new URL("../icons/browsers-bold.svg?v=c0b130a4c52c4fa12be881787b38b06abe3f73689b3424acc0403b839fc12c9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
