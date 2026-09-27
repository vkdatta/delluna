export const name="ecg_heart-fill";
export const id="dl_7739d83fc0cf2096c0e5";
export const url=new URL("../icons/ecg_heart-fill.svg?v=6e431edfa3a011fa84e5b5829b337f7e774ed511e07a183013148ecd3c2d6888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
