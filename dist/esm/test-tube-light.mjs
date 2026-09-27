export const name="test-tube-light";
export const id="dl_505e216b6e751af55730";
export const url=new URL("../icons/test-tube-light.svg?v=0d707b4f9fc98604f01ce49f86f322208a359d83725b9a621c5c25e5f0bb42b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
