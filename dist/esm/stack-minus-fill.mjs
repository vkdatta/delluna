export const name="stack-minus-fill";
export const id="dl_0f768e29481a44969b17";
export const url=new URL("../icons/S/stack-minus-fill.svg?v=ce2f483b97a9e0559f9b1ea60b8ce2ccea203fb9ba97929f4d94bafff80e80f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
