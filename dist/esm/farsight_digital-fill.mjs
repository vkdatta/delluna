export const name="farsight_digital-fill";
export const id="dl_8b446b0a8a386533b3e7";
export const url=new URL("../icons/farsight_digital-fill.svg?v=824a2d2cacaedc686f14b308caf3a17549d386ada1052dfa34e5664764a260a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
