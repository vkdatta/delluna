export const name="sprinkler-fill";
export const id="dl_7b2d448aec8049afb41a";
export const url=new URL("../icons/sprinkler-fill.svg?v=55808d7865add1c828d7a5f319691aff6cba4ef0f285076c8e61da29f33c23ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
