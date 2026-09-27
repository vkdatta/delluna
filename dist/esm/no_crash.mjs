export const name="no_crash";
export const id="dl_631a2b98d8551d8db62c";
export const url=new URL("../icons/no_crash.svg?v=7eef67b2e0b47e261ee008337efce44e18cab3a9262d78e51d4a17afd20f5dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
