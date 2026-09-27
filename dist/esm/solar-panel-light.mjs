export const name="solar-panel-light";
export const id="dl_3f487e5d5a22a11cdb3e";
export const url=new URL("../icons/solar-panel-light.svg?v=cd5c6be35b3f0a9ff8b2a28b25baae1373ada4ce004196c76a213e74316c21a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
