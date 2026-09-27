export const name="brackets-round-duotone";
export const id="dl_fbf22018688648318ca5";
export const url=new URL("../icons/brackets-round-duotone.svg?v=1f09131bc33963ff31ac42a825d66049a2d06daf91d5390ee0d127337474f684",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
