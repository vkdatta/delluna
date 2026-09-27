export const name="hand-tap-thin";
export const id="dl_a92616a8ac7e4bfc93a8";
export const url=new URL("../icons/hand-tap-thin.svg?v=111ecc39b3f6c3d5005dc385ea7cff0490c9ab3089e8694a37bc8c3cbd023b33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
