export const name="bowling-ball-duotone";
export const id="dl_6d968496d4db4701909f";
export const url=new URL("../icons/bowling-ball-duotone.svg?v=92a1f3f449b33c97b3d785ec3bb0440158d9f1b4a62202a83d5283ca16fbbcf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
