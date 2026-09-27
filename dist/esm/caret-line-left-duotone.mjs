export const name="caret-line-left-duotone";
export const id="dl_9dd40a99d6b54ad69415";
export const url=new URL("../icons/caret-line-left-duotone.svg?v=3d581b5416a720078e706e16a00f3fac4a3fdd1707a420ac1d0aede9794ee1c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
