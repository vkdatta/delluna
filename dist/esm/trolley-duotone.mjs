export const name="trolley-duotone";
export const id="dl_098a7cc82f225e0652dd";
export const url=new URL("../icons/trolley-duotone.svg?v=6a33318970097a2167ee634c8716d29d727c97fa8115bf5716e92ab2ff214a6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
