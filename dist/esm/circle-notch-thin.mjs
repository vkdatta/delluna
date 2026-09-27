export const name="circle-notch-thin";
export const id="dl_585b1a72b4414f9083a8";
export const url=new URL("../icons/circle-notch-thin.svg?v=59acb25f1a579286c8208b5ab36f0d1f50039d50a5badc9a8f33e01da187ca18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
